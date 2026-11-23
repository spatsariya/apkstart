# ApkStart

<p align="center"><img src="docs/images/logo.png" alt="ApkStart Logo" width="160" /></p>

[![CI](https://github.com/RoutineMiku/apkstart/actions/workflows/ci.yml/badge.svg)](https://github.com/RoutineMiku/apkstart/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/RoutineMiku/apkstart?include_prereleases&sort=semver)](https://github.com/RoutineMiku/apkstart/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%2010%2F11%20x64-0078D6.svg)](#)

**Run Android applications on Windows as individual desktop applications.**

ApkStart is an early-stage, free, open-source project. The original developer maintains it in spare time; features may be incomplete or experimental. There are no advertisements.

> **About this fork:** This repository is a fork of [RoutineMiku/apkstart](https://github.com/RoutineMiku/apkstart). Original author: **RoutineMiku**. Release links below point to the upstream project.

## Features

- **Double-click an APK to install it.** After registering the `.apk` file association, installing an Android app is as simple as opening the APK in Windows File Explorer.
- **Separate desktop icon for every application.** ApkStart extracts the actual icon from each APK, generates a Windows ICO, and creates desktop and Start menu shortcuts.
- **Independent application windows.** Apps run in managed emulator windows with their own titles, icons, and remembered window sizes. Toggle fullscreen with `F11`.
- **Windows search integration.** Installed apps appear in the Start menu under `Programs\ApkStart`.
- **Shared files.** `%USERPROFILE%\ApkStartShared` synchronizes in both directions with `/sdcard/ApkStartShared` inside Android.
- **Managed runtime.** The app handles Android Emulator installation, startup, cleanup, snapshots, and compatibility settings. No existing BlueStacks, MuMu, LDPlayer, or WSA installation is required.
- **Automatic orientation and tablet layout.** APK metadata determines preferred screen orientation, with per-app overrides and an optional tablet-style layout.
- **Diagnostics and repair.** Detects common emulator, device connection, acceleration, storage, and network problems.

![Main application window](docs/images/app.png)

### How it works

```text
Double-click an Android app shortcut
         |
ApkStart.exe --launch <package.name>
         |
Start the managed Android 14 emulator if needed
         |
Resolve and launch the app's Android LAUNCHER activity
         |
Monitor startup and retry recoverable failures
         |
Display the app in its own Windows window
```

## Download

Official upstream release mirrors:

- [GitHub releases](https://github.com/RoutineMiku/apkstart/releases)
- [Gitee releases](https://gitee.com/daily-miku/apkstart/releases) (often faster in mainland China)

| Distribution | Filename pattern | Description |
| --- | --- | --- |
| Microsoft Store / MSIX | `ApkStart_<version>_x64.msix` | Bundled runtime, updates handled by the Store |
| Full portable ZIP | `ApkStart-v*-win64-full.zip` | Extract and run, with runtime included (approximately 830 MB ZIP) |
| Installer | `ApkStart-v*-Setup.exe` | Standard Windows installer, shortcuts, and uninstall entry (approximately 1.3 GB) |
| Lightweight portable ZIP | `ApkStart-v*-win64-portable.zip` | Smaller ZIP (approximately 96 MiB); downloads runtime on first use |

The application binary uses ApkStart icons and version metadata. These figures and package names describe upstream builds and may vary by release.

## Interface language and translations

ApkStart now supports an independent **App Language** setting:

- **English** is the default interface language.
- **Simplified Chinese** is included for switching back to the original interface.
- **Any other language** can be added with an importable JSON translation pack. Missing translations fall back to English, so languages without a complete pack are not yet fully translated.
- The language selector is under **Settings → General & Installation → App Language**. Switching happens immediately, and your selection persists across launches.

This is separate from **Android system language**, which changes the language inside Android rather than the Windows app. See [language-pack instructions and translation guide](docs/languages.md).

The repository contains updated source files, not a rebuilt installer. Existing installations must be replaced by a build made from this fork before the English UI appears.

## Getting started

1. Download an appropriate Windows package from an upstream release.
2. Open ApkStart. If using the lightweight build, follow the **Runtime / One-click Setup** instructions to install the Android components.
3. Click **Install APK**, select an APK, or drag and drop the file onto the app.
4. Double-click its desktop or Start menu shortcut to launch it.
5. Use `F11` or the tray menu to switch between windowed and fullscreen mode.

By default, ApkStart runs from the system tray and can pre-warm Android for faster launches. Android uses the host's network through QEMU NAT; installing a virtual network adapter is generally unnecessary.

### Orientation and display

ApkStart reads `AndroidManifest.xml` to infer landscape or portrait orientation. Typical panel configurations are **720 × 1280** (portrait) and **1280 × 720** (landscape). Switching panel orientation can require restarting the runtime.

**Tablet layout** is enabled by default. At 720 pixels and 190 dpi, the logical width is around 606 dp, which activates tablet layouts in apps that support them. You can disable this option or force a specific orientation in **Settings > Display & Windows**.

## Settings

Settings are grouped by purpose and include search:

| Section | Features |
| --- | --- |
| General & Installation | Runtime setup, Windows startup, disk usage and cleanup |
| Display & Windows | Fullscreen, orientation, tablet layout, Android display configuration |
| Controls & Input | Mouse and keyboard/gamepad mapping |
| Performance & Resources | CPU, memory, graphics, data partition, snapshots, advanced options |
| Network & Downloads | Update sources, mirrors, simultaneous download threads |
| Diagnostics & Repair | Environment checks, compatibility patches, automatic debugging |
| Integration & Files | Shortcuts, shared folders, system integration |
| Updates & About | Update checks and project details |

Automatic diagnostics check for incomplete runtime installations, failed boots, stale locks, unauthorized or offline adb devices, snapshots, insufficient disk space, incompatible settings and network issues. Supported repairs can be applied from settings. The default check interval is 10 minutes and can be disabled.

### Automatic updates

Use **Settings > Updates & About > Check for Updates**, or the tray menu. ApkStart compares GitHub and Gitee releases, tests available download sources, and selects a working mirror. Installer builds update through the setup executable. Portable builds update the program directory without deleting installed applications and runtime data stored outside it.

## Build from source

**Requirements:** Windows 10/11 x64, Node.js 20+, npm, sufficient storage, and preferably CPU hardware virtualization.

```powershell
# Install project dependencies (including Electron)
npm install

# Launch the app and complete Android runtime setup
npm start

# Optional: enable .apk double-click file association
npm run assoc:on

# Package a lightweight portable build
npm run pack

# Create a distributable ZIP using the project's ZIP script
node build/zip.js dist/ApkStart-win64-portable ApkStart-win64-portable.zip
```

The portable executable is generated under `dist/ApkStart-win64-portable/`. The upstream project recommends its own ZIP script instead of `Compress-Archive` to meet Gitee's release attachment size limit.

### Full portable and installer builds

```powershell
# Build a full portable distribution
npm run pack:full

# Prepare Android Emulator and system images for bundling
npm run runtime

# Create a Windows NSIS installer
npm run build:exe

# Optional: create an MSIX package
npm run build:msix
```

The installer is typically emitted to `dist/release/ApkStart-<version>-Setup.exe`. Building a bundled release requires the downloaded runtime and can consume several gigabytes. Compressed system images are expanded on first launch.

## Android runtime and compatibility

ApkStart independently downloads, verifies, and manages its Android runtime, usually under `%APPDATA%\apkstart\runtime`. It prefers an upstream bundled runtime archive where available and otherwise downloads Google's official components.

| Component | Approximate size | Purpose |
| --- | --- | --- |
| Android platform-tools (adb) | 8 MB | Install, launch, and inspect apps |
| Android Emulator | 440 MB | Android runtime engine and GPU translation |
| Android 14 / API 34 Google Play x86_64 image | 3.1 GB uncompressed / approximately 1.1 GB xz | Android operating system, Google services, and compatibility |
| AEHD driver (optional) | 0.2 MB | Hardware acceleration alternative to Windows WHPX |

![Runtime deployment wizard](docs/images/setup.png)

The project supports software rendering when acceleration is unavailable, automatic selection of emulator GPU options, adaptive CPU/RAM allocation, resumable segmented downloads, stale lock removal, and quickboot snapshots.

The runtime shares a read-only Android system image between installed apps, with writable app data and snapshots stored separately. Background pre-warming improves launch times but can use approximately **1 GB of idle RAM**; disable it in settings if preferred.

**ARM compatibility:** The Android 14 Google Play image includes an ARM translation layer that enables some ARM-only applications to run on x86_64. Compatibility is not universal: apps with strict emulator, sensor, or device-integrity checks may not work. The upstream author reports successful playback in the ARM-only Hongguo video app.

Additional technical details:

- [System preflight and auto-configuration](docs/preflight.md)
- [Driver and compatibility patches](docs/drivers.md)

## Hardware acceleration troubleshooting

Android Emulator supports two common Windows acceleration mechanisms:

| Option | What it is | Administrator required | Restart |
| --- | --- | --- | --- |
| **WHPX** | Windows Hypervisor Platform | To enable the Windows feature | Usually yes |
| **AEHD** | Google's Android Emulator Hypervisor Driver | To install the driver | Usually no |

For installed/portable builds, open **Settings > Diagnostics & Repair**, run the environment check, and click **Repair** on the acceleration warning.

For MSIX builds, enable **Windows Hypervisor Platform** using **Turn Windows features on or off**, then restart Windows. Alternatively, run the following in an elevated PowerShell window:

```powershell
dism /online /enable-feature /featurename:HypervisorPlatform /all /norestart
dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

**Important:** `VirtualMachinePlatform` alone is not the same as `HypervisorPlatform`. Without hardware acceleration, software emulation may still work, but booting can take several minutes.

### Fix missing or incorrect desktop icons

Each installed app should use its own icon, stored under `%APPDATA%\apkstart\icons\<package>.ico`.

1. Open **Settings > Integration & Files > Rebuild Shortcuts** to regenerate desktop/Start menu links.
2. If needed, delete the affected shortcut and recreate it from ApkStart.

Moving a portable installation can invalidate absolute executable paths embedded in old `.lnk` shortcuts. Regenerating them usually fixes the problem.

### Why `adb devices` does not show ApkStart

ApkStart runs its own adb server on **port 5044**, separate from the default adb server on port 5037. To communicate with its emulator:

```powershell
$env:ANDROID_ADB_SERVER_PORT = 5044
adb devices
# Typically shows emulator-5554
```

Avoid manually connecting to port 5555. Some Google Play system images then display a USB debugging authorization prompt that can obscure the app.

## Command-line usage

```text
ApkStart.exe                         Open the main interface
ApkStart.exe <path\to\app.apk>      Install an APK
ApkStart.exe --launch <package>       Launch an installed app
```

## Testing

```powershell
npm test                                # Node.js and runtime unit tests
npm run test:boot                       # QEMU boot and shutdown integration test
npm run selftest                        # Verify runtime, app launch, screenshots, shared files
electron test/electron-integration.js   # Icon and shortcut tests
electron . --smoke test\shot.png       # UI startup screenshot
```

After Android is installed, `npm run selftest` checks adb connectivity, Android version, freeform windows, and two-way shared-folder syncing. Add `--apk path\to\app.apk` to exercise the complete installation and launch workflow.

## Implementation notes

ApkStart does **not** implement a hypervisor or Android operating system from scratch. It builds a Windows-native application experience on AOSP, QEMU, Android Emulator, and adb.

Shared-folder integration is **bidirectional synchronization**, not a direct NTFS mount into Android. Hardware behavior and compatibility vary by app and device.

Key project directories include `src/main.js` (Electron main process), `src/ui/` (interface), `src/core/` (APK parsing, emulator, adb, sharing, shortcuts), `engine/` (runtime assets), `build/` (packaging), `scripts/` (utilities), and `test/` (tests).

## Credits and contributing

**Original project and author:** [RoutineMiku/apkstart](https://github.com/RoutineMiku/apkstart) by **RoutineMiku**.

<p align="center"><img src="docs/images/brand.png" alt="Original project branding and QR code" width="560" /></p>

Issues and pull requests are welcome. Please run `npm test` before submitting changes, and read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Android system images, QEMU, Electron, and Google components have their own applicable licenses. Consult the respective vendors' terms when downloading or distributing bundled runtimes.

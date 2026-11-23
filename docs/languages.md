# Translating ApkStart

ApkStart separates two language settings:

- **App Language** translates the ApkStart interface, menus, warnings and help. It is available under **Settings → General & Installation → App Language** and is saved across restarts.
- **Android system language** controls language and formatting **inside the Android virtual machine**, not the ApkStart interface. Changing it may require an Android runtime restart.

## Built-in languages

- **English** (`en-US`) is the default.
- **Simplified Chinese** (`zh-CN`) remains available for the original interface.

The original Chinese user manual is retained, and an English help manual is included. Other languages are supported through language packs but **are not automatically translated**. Missing translations fall back to English.

## Add any language

Click **Import language pack (any language)** in App Language and select a local UTF-8 JSON file. The app uses standard BCP 47 language tags (such as `fr-FR`, `es-ES`, `hi-IN`, `de-DE`, `ja-JP`, `pt-BR`, `ar-SA`, and `bn-IN`).

Example (`fr-FR.json`):

```json
{
  "locale": "fr-FR",
  "name": "Français",
  "translations": {
    "Settings": "Paramètres",
    "Install APK": "Installer un APK",
    "Get started": "Commencer",
    "App Language / Interface Language": "Langue de l'application"
  }
}
```

Translation keys are the English interface strings. Preserve placeholders, variables, technical identifiers, and keyboard shortcuts when creating language packs. Packs are stored locally and do not upload content. Imported packs appear in the App Language selector and remain available after the app restarts.

For a fully translated interface in another language, its pack must cover the user-facing strings. The package format supports additional languages without changing the application logic, but importing a small partial pack does **not** make the entire app available in that language.

## Translators and contributors

1. Start with the English UI labels in `src/ui/index.html` and the English translation dictionary in `src/core/interface-en.json`.
2. Translate user-facing strings, not app names, package IDs, URLs, file paths, ADB commands, or diagnostic codes.
3. Produce a JSON pack with its locale code and native-language name.
4. Import it and check long labels, dialogs, errors, layout, and right-to-left direction where applicable.
5. Share the pack through a pull request or issue for review.

### Technical notes

- `src/ui/i18n.js` applies translations to static and dynamic renderer text and supports importable language packs.
- The selected interface locale is stored as `ui.language` in `settings.json`.
- The Android locale remains `engine.locale`.
- Electron/Windows native notifications and tray menus use the selected built-in language; languages without a native pack fall back to English.
- `src/ui/manual-en.html` and `src/ui/manual.html` are language-specific help pages, with preserved deep-link IDs.
- Changes made in GitHub source files do not update an already installed application. Rebuild from the fork and install or extract the new build.

## Important: updates from the original project

This fork currently inherits the upstream update source (`RoutineMiku/apkstart`). An update installed from upstream may replace your translated fork build with an original release. Until the fork publishes its own releases and updater configuration, avoid installing upstream updates over a custom English-language build.

## Build the translated app on Windows

```powershell
git clone https://github.com/spatsariya/apkstart.git
cd apkstart
npm ci
npm test
npm run pack
```

The lightweight portable build is written under `dist/ApkStart-win64-portable`. First use may require downloading Android runtime components. For a bundled Windows installer, follow the [README build instructions](../README.md#full-portable-and-installer-builds).

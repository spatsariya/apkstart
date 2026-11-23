/* ApkStart interface translations. The Android guest language is a separate setting.
 * Add languages by importing JSON packs with {"locale":"fr-FR","name":"Français","translations":{"Settings":"Paramètres"}}.
 * Missing translations fall back to English. No text is sent to external services.
 */
(() => {
  'use strict';
  const BUILTINS = [["未连接运行时","Runtime disconnected"],["安装 APK","Install APK"],["把 APK 拖进来就能装","Drag an APK here to install"],["安装完成后会自动生成桌面图标，双击即以独立窗口运行，和普通 Windows 软件一样。","A desktop shortcut will be created automatically after installation. Double-click it to open the app in its own window, just like a Windows application."],["已注册 .apk 关联时，在资源管理器里双击 APK 也会直接装到 ApkStart。","If APK file association is enabled, you can also install apps by double-clicking APK files in File Explorer."],["选择 APK 文件","Choose APK files"],["正在检查运行时…","Checking runtime…"],["你好","Hello"],["ApkStart 已就绪","ApkStart is ready"],["下次启动不再自动弹出","Don't show this at startup again"],["打开设置","Open settings"],["开始使用","Get started"],["松手开始安装","Drop to install"],["支持单个或多个 .apk 文件","Supports one or multiple APK files"],["设置","Settings"],["常用与安装","General & Installation"],["显示与窗口","Display & Windows"],["操作与输入","Controls & Input"],["性能与资源","Performance & Resources"],["网络与下载","Network & Downloads"],["诊断与修复","Diagnostics & Repair"],["集成与文件","Integration & Files"],["更新与关于","Updates & About"],["实验室","Experimental"],["运行时与环境","Runtime & Environment"],["运行状态","Runtime status"],["正在检查…","Checking…"],["一键完成","One-click setup"],["高级：连接已有运行时","Advanced: connect an existing runtime"],["全自动：无需选择镜像、无需启用加速、无需调内存","Fully automatic: no manual image, acceleration, or memory configuration required"],["安装 Android 到虚拟磁盘","Install Android to virtual disk"],["我已安装完成","I have finished installing"],["稍后再说","Later"],["自动模式（默认，无需设置）","Automatic mode (default, no setup needed)"],["本机自适应参数","Automatic system configuration"],["正在检测…","Detecting…"],["磁盘总占用（运行时 + 安卓数据 + 缓存）","Total disk usage (runtime + Android data + cache)"],["正在统计…","Calculating…"],["清理可回收文件","Clean up removable files"],["清理旧版本残留","Remove previous version leftovers"],["修复网络","Repair network"],["重置安卓数据","Reset Android data"],["导出诊断报告","Export diagnostic report"],["重建快捷方式","Rebuild shortcuts"],["开机自动启动（默认开启）","Start with Windows (on by default)"],["应用窗口","Application windows"],["显示模式","Display mode"],["竖屏窗口（可自由拉伸，记住每个应用的大小）","Portrait window (resizable; remembers each app's size)"],["全屏（铺满屏幕，保持手机比例两侧留黑）","Fullscreen (keep aspect ratio; black bars if needed)"],["自动全屏","Automatically enter fullscreen"],["屏幕方向","Screen orientation"],["跟随应用（推荐 · 自动选横竖屏，画面铺满不留黑边）","Follow app (recommended; choose portrait or landscape automatically)"],["强制竖屏（手机比例，适合刷短视频、看小说）","Force portrait (videos and reading)"],["强制横屏（宽屏铺满，适合看剧、玩游戏）","Force landscape (videos and games)"],["镜像自动旋转","Android auto-rotation"],["打开（默认）· 系统设置里显示自动旋转已开启","On (default; show auto-rotation enabled in Android)"],["关闭 · 回到旧的锁定行为","Off (lock orientation)"],["平板排版","Tablet layout"],["关闭（镜像默认密度，手机排版）","Off (default density; phone layouts)"],["当前面板方向","Current panel orientation"],["竖屏面板","Portrait panel"],["横屏面板","Landscape panel"],["窗口承载方式","Window rendering mode"],["原生窗口（默认·推荐）· 模拟器自己开窗口，帧率与缩放最稳","Native window (default, recommended; best performance and resizing)"],["嵌入模式 · 安卓画面嵌在 ApkStart 窗口里，标题栏带旋转按钮","Embedded window (Android within ApkStart, with rotation control)"],["竖屏画面大小","Portrait render size"],["小 · 720 × 1280","Small · 720 × 1280"],["中 · 900 × 1600","Medium · 900 × 1600"],["大 · 1080 × 1920","Large · 1080 × 1920"],["鼠标键位","Mouse controls"],["左键 · 确认 / 点击","Left click · Tap / Confirm"],["右键 · 安卓返回","Right click · Android Back"],["滚轮 · 滑动","Scroll wheel · Swipe"],["平滑（推荐）· 合并多次滚动为一次流畅滑动","Smooth (recommended; combine scrolls into a swipe)"],["原生 · 交给模拟器逐格处理","Native (handled by emulator)"],["关闭 · 不拦截滚轮","Off (do not intercept scrolling)"],["鼠标侧键 · 返回 / 前进（默认关闭）","Mouse side buttons · Back / Forward (off by default)"],["键盘映射（游戏手柄）","Keyboard mapping (game controls)"],["启用键盘映射","Enable keyboard mapping"],["资源策略","Resource profile"],["省资源 · 2 核 / 让出前台 / 540p（老机器、挂机）","Power saving · 2 cores / lower priority / 540p"],["均衡 · 一半物理核 / 让出前台 / 720p（推荐）","Balanced · half of CPU cores / 720p (recommended)"],["流畅 · 不限核数 / 与前台同优先级（视频、游戏）","Performance · unrestricted cores / normal priority (games and video)"],["显卡偏好（独显 / 核显）","Preferred GPU (discrete / integrated)"],["系统默认（推荐 · 让 Windows 决定）","System default (recommended)"],["独显优先（游戏 / 视频更流畅，更耗电）","Prefer discrete GPU (faster, more power)"],["核显优先（省电、发热低）","Prefer integrated GPU (lower power)"],["画质（安卓内部渲染分辨率）","Graphics quality (Android render resolution)"],["自动（按加速状态）","Automatic (based on acceleration)"],["流畅 · 540 × 960","Performance · 540 × 960"],["均衡 · 720 × 1280","Balanced · 720 × 1280"],["高清 · 1080 × 1920","High quality · 1080 × 1920"],["安卓数据分区（应用与游戏装这里）","Android data partition (apps and games)"],["自动","Automatic"],["立即扩容","Expand now"],["正在读取数据分区…","Reading data partition…"],["系统语言","Android system language"],["简体中文（推荐）","Simplified Chinese"],["繁體中文","Traditional Chinese"],["English（镜像原生）","English (native image language)"],["日本語","Japanese"],["中文输入法（推荐）","Chinese input method (optional)"],["网络加速（推荐）","DNS acceleration (recommended for China)"],["安卓声音","Android audio"],["麦克风输入（推荐）","Microphone input (recommended)"],["保留快速启动快照（推荐）","Keep quickboot snapshots (recommended)"],["使用手册（含故障解决方案）","User guide and troubleshooting"],["搜索已安装应用","Search installed apps"],["搜索设置项：横屏 / 内存 / 代理 / 快照…","Search settings: landscape / memory / proxy / snapshots…"],["清除搜索","Clear search"],["设置分类","Settings categories"]];
  const enToZh = new Map(BUILTINS.map(([zh, en]) => [en, zh]));
  const zhToEn = new Map(BUILTINS);
  const STORAGE_KEY = 'apkstart.interface.packs.v1';
  const LOCALE_KEY = 'apkstart.interface.locale';
  const ALLOWED = /^(?:[a-z]{2,3})(?:-[A-Za-z0-9]{2,8}){0,3}$/;
  const packs = new Map();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) for (const entry of saved) {
      if (entry && ALLOWED.test(entry.locale) && entry.translations && typeof entry.translations === 'object') {
        packs.set(entry.locale, entry);
      }
    }
  } catch (_) { /* Fresh installation or invalid cache */ }

  const textSources = new WeakMap();
  const attrSources = new WeakMap();
  const lastWrites = new WeakMap();
  let locale = localStorage.getItem(LOCALE_KEY) || 'en-US';
  if (locale !== 'en-US' && locale !== 'zh-CN' && !packs.has(locale)) locale = 'en-US';

  // Additional translations for original Chinese strings still present in the UI.
  const MORE_EN = {"虚拟机窗口已打开。按下面 6 步操作一次，之后 ApkStart 会直接从磁盘启动，不再需要镜像。":"The virtual machine window is open. Follow these six steps once. ApkStart will boot from the virtual disk afterward.","启动菜单":"Boot menu","进度到 100% 后点下面的":"When progress reaches 100%, click","我已安装完成":"Installation complete","之后 ApkStart 会自动重启并接管":"ApkStart will restart and take over automatically","本机":"This computer","系统语言":"System language","设置修改后立即生效":"Changes take effect immediately","完成":"Done","保存":"Save","返回":"Back","取消":"Cancel","关闭":"Close","打开":"Open","刷新":"Refresh","浏览":"Browse","退出":"Exit","立即同步":"Sync now","保存并迁移":"Save and migrate","立即检测":"Run check now","开始体检":"Run system check","应用推荐配置":"Apply recommended settings","导入驱动…":"Import compatibility profile…","打开驱动目录":"Open profile folder","导出本机模板":"Export a template for this PC","重建快捷方式":"Rebuild shortcuts","诊断报告":"Diagnostic report","设置":"Settings","运行时":"Runtime","显卡":"Graphics card","内存":"Memory","核心":"CPU cores","自动":"Automatic","已下载":"Downloaded","未下载":"Not downloaded","下载兼容镜像":"Download compatibility image","停止内置虚拟机":"Stop virtual machine","启动运行时":"Start runtime","运行时未启动":"Runtime not running","一键流畅优化":"Optimize performance","安卓原生设置":"Android settings","显示设置":"Display settings","声音设置":"Sound settings","语言设置":"Language settings","应用管理":"Manage apps","桌面与应用":"Desktop & Apps","文件互通":"File sharing","系统集成":"System integration","快捷方式目录":"Shortcut directory","本机共享目录":"Host shared folder","安卓内对应目录":"Android shared folder","关联 .apk 文件":"Associate .apk files","检查中…":"Checking…","一键卸载":"Uninstall","卸载 ApkStart":"Uninstall ApkStart","实验室":"Experimental","后台保留应用数":"Background apps to retain","选择适合你的版本":"Choose the right edition","中文输入法":"Chinese input method","需要重新启动":"Restart required","每 1 分钟":"Every minute","每 5 分钟":"Every 5 minutes","每 10 分钟（推荐）":"Every 10 minutes (recommended)","每 30 分钟":"Every 30 minutes","每 1 小时":"Every hour","发现新问题时通知我":"Notify me about new issues","尚未检测":"Not checked yet","正在读取驱动…":"Loading compatibility profiles…","高级参数（一般无需修改）":"Advanced settings (usually unnecessary)","设备地址":"Device address","adb 路径":"adb path","留空则自动在 PATH / Android SDK 中查找":"Leave blank to search PATH / Android SDK automatically","系统镜像（ISO）":"System image (ISO)","内存 (MB，0 = 自动)":"Memory (MB, 0 = automatic)","CPU 核心（0 = 自动)":"CPU cores (0 = automatic)","媒体音量":"Media volume","字体大小":"Font size","显示大小":"Display size","紧凑（省性能）":"Compact (better performance)","标准":"Standard","宽松":"Comfortable","特大":"Extra large","飞行模式":"Airplane mode","系统动画":"System animations","开机自动启动":"Start with Windows","自动创建桌面快捷方式":"Automatically create desktop shortcut","同时添加到开始菜单":"Also add to Start menu","默认：C 盘用户数据目录":"Default: C: user data directory","默认：运行时目录下的 avd 文件夹":"Default: avd folder under the runtime directory","数据与缓存":"Data & cache","正在处理…":"Processing…","请选择":"Please select","导出失败":"Export failed","未找到":"Not found","加载失败":"Failed to load","安装失败":"Installation failed","启动失败":"Startup failed","未知错误":"Unknown error","当前应用未配置按键映射。右键应用卡片可快速套用预设模板。":"No key mapping configured for the current app. Right-click the app to apply a preset.","安卓虚拟机内部的无线网，关掉可省一点 CPU。":"Wi-Fi inside the Android virtual machine. Turning it off may save CPU resources.","彻底断网（含移动数据），需要安静时打开。":"Disable all network access, including mobile data.","关掉后界面切换明显更快，功能不受影响。":"Disabling animations makes transitions faster without removing functionality.","快捷方式带真实应用图标，双击直接进应用":"Shortcuts use each app's real icon. Double-click to open.","Windows 搜索能搜到应用名，任务栏也按应用分组":"Apps can be found through Windows search and grouped on the taskbar.","两侧目录会持续双向同步；在安卓应用里保存到该目录的文件，会出现在本机共享目录中。":"The folders synchronize in both directions. Files saved here by Android apps appear on your computer.","双击 APK 直接安装到 ApkStart（仅写入当前用户，无需管理员）":"Double-click an APK to install it with ApkStart (current user only; no administrator privileges).","系统镜像全机共享一份":"One shared system image is used by all installed apps.","运行时数据目录":"Runtime data directory","安卓数据目录":"Android data directory","快捷方式":"Shortcut","正在检测虚拟化、显卡、内存…":"Checking virtualization, graphics, and memory…","环境自检通过，没有发现会影响运行的问题。":"System check passed. No problems affecting operation were found.","重新检查":"Check again","一键修复全部":"Repair all","修复":"Repair","教程":"Guide","环境自检":"Environment check"," 个严重":" critical"," 个提示":" notices"," 项待修复":" issues to fix"};
  // Longer phrases first to prevent short replacement terms from breaking a sentence.
  const enFragments = Object.entries(MORE_EN).sort((a,b) => b[0].length - a[0].length);
  for (const [zh,en] of enFragments) if (!zhToEn.has(zh)) zhToEn.set(zh,en);
  for (const [zh,en] of enFragments) if (!enToZh.has(en)) enToZh.set(en,zh);

  function translate(raw, to = locale) {
    if (typeof raw !== 'string' || !raw.trim()) return raw;
    const head = raw.match(/^\s*/)[0], tail = raw.match(/\s*$/)[0], body = raw.trim();
    let english = zhToEn.get(body) || body;
    if (/[\u3400-\u9fff]/.test(english)) {
      for (const [zh,en] of enFragments) english = english.split(zh).join(en);
    }
    let result = english;
    if (to === 'zh-CN') result = enToZh.get(english) || enToZh.get(body) || body;
    else if (to !== 'en-US') {
      const pack = packs.get(to);
      result = pack && typeof pack.translations[english] === 'string'
        ? pack.translations[english] : english;
    }
    return head + result + tail;
  }

  function skip(node) {
    const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    return !parent || !!parent.closest('script,style,code,pre,kbd,svg,[data-no-i18n],.card .name,.card .meta');
  }

  function translateText(node) {
    if (skip(node)) return;
    const last = lastWrites.get(node);
    const now = node.nodeValue;
    if (last !== undefined && now === last) return;
    if (!textSources.has(node) || last !== now) textSources.set(node, now);
    const source = textSources.get(node);
    const next = translate(source);
    if (next !== now) node.nodeValue = next;
    lastWrites.set(node,next);
  }

  function translateAttrs(el) {
    if (skip(el)) return;
    let sources = attrSources.get(el);
    if (!sources) { sources = {}; attrSources.set(el,sources); }
    for (const attr of ['title','placeholder','aria-label']) {
      if (!el.hasAttribute(attr)) continue;
      const now = el.getAttribute(attr);
      const key = '_last_' + attr;
      if (sources[attr] === undefined || now !== sources[key]) sources[attr] = now;
      const next = translate(sources[attr]);
      if (next !== now) el.setAttribute(attr,next);
      sources[key] = next;
    }
  }

  function walk(root, force = false) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      if (force) lastWrites.delete(root);
      translateText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || skip(root)) return;
    translateAttrs(root);
    for (const el of root.querySelectorAll('*')) translateAttrs(el);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const node = w.currentNode;
      if (force) {
        // Preserve original application strings when toggling languages.
        const original = textSources.get(node);
        if (original !== undefined && node.nodeValue === lastWrites.get(node)) {
          node.nodeValue = original;
        }
        lastWrites.delete(node);
      }
      translateText(node);
    }
  }

  let pending = false;
  const observer = new MutationObserver((records) => {
    if (pending) return;
    pending = true;
    queueMicrotask(() => {
      pending = false;
      const roots = new Set();
      for (const record of records) {
        if (record.type === 'characterData') roots.add(record.target);
        if (record.type === 'attributes') roots.add(record.target);
        for (const node of record.addedNodes || []) roots.add(node);
      }
      for (const root of roots) walk(root);
    });
  });

  function available() {
    return [
      { locale:'en-US',name:'English' },
      { locale:'zh-CN',name:'简体中文' },
      ...[...packs.values()].filter(p => !['en-US','zh-CN'].includes(p.locale))
        .map(p => ({locale:p.locale,name:p.name || p.locale}))
    ];
  }
  function fillSelector(select) {
    if (!select) return;
    const existing = select.value;
    select.replaceChildren();
    for (const item of available()) {
      const option = document.createElement('option');
      option.value = item.locale;
      option.textContent = item.name;
      select.appendChild(option);
    }
    select.value = available().some(p => p.locale === locale) ? locale : (existing || 'en-US');
  }
  function setLocale(next) {
    if (next !== 'en-US' && next !== 'zh-CN' && !packs.has(next)) return false;
    locale = next;
    localStorage.setItem(LOCALE_KEY,locale);
    document.documentElement.lang = locale;
    walk(document.body,true);
    fillSelector(document.getElementById('setUiLanguage'));
    return true;
  }
  function installPack(pack) {
    if (!pack || !ALLOWED.test(String(pack.locale || '')) || !pack.translations ||
      typeof pack.translations !== 'object' || Array.isArray(pack.translations)) {
      throw new Error('Invalid language pack. Provide locale and translations.');
    }
    if (Object.keys(pack.translations).length > 20000) throw new Error('Language pack is too large.');
    const normalized = {
      locale: pack.locale, name: String(pack.name || pack.locale).slice(0, 70),
      translations: Object.fromEntries(Object.entries(pack.translations).filter(([k,v]) =>
        k.length <= 1500 && typeof v === 'string' && v.length <= 5000))
    };
    packs.set(normalized.locale,normalized);
    localStorage.setItem(STORAGE_KEY,JSON.stringify([...packs.values()]));
    fillSelector(document.getElementById('setUiLanguage'));
    return normalized;
  }

  const originalAlert = window.alert.bind(window);
  const originalConfirm = window.confirm.bind(window);
  const originalPrompt = window.prompt.bind(window);
  window.alert = message => originalAlert(translate(String(message)));
  window.confirm = message => originalConfirm(translate(String(message)));
  window.prompt = (message, value) => originalPrompt(translate(String(message)), value);

  window.ApkStartI18n = { available, setLocale, getLocale:()=>locale, fillSelector, installPack, translate };
  function startup() {
    walk(document.body);
    observer.observe(document.body,{ subtree:true,childList:true,characterData:true,attributes:true,
      attributeFilter:['title','placeholder','aria-label'] });
    fillSelector(document.getElementById('setUiLanguage'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',startup,{once:true});
  else startup();
})();

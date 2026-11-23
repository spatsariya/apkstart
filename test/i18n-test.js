'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

// The localization module must work in Electron without remote services or npm i18n packages.
function createEngine(persisted = new Map()) {
  const window = { alert() {}, confirm() { return true; }, prompt() { return null; } };
  const document = {
    readyState: 'loading',
    documentElement: { lang: 'en-US' },
    body: { nodeType: 0 },
    addEventListener() {},
    getElementById() { return null; },
  };
  const localStorage = {
    getItem(key) { return persisted.has(key) ? persisted.get(key) : null; },
    setItem(key, value) { persisted.set(key, String(value)); },
  };
  const sandbox = {
    window, document, localStorage,
    Node: { TEXT_NODE: 3, ELEMENT_NODE: 1 },
    MutationObserver: class {},
    queueMicrotask: (fn) => fn(),
  };
  vm.runInNewContext(read('src/ui/i18n.js'), sandbox, { filename: 'src/ui/i18n.js' });
  return { t: window.ApkStartI18n, document, persisted };
}

const { t, document, persisted } = createEngine();
assert.equal(t.getLocale(), 'en-US');
assert.equal(t.translate('Settings'), 'Settings');
assert.equal(t.translate('设置'), 'Settings');
assert.equal(t.setLocale('zh-CN'), true);
assert.equal(document.documentElement.lang, 'zh-CN');
assert.equal(t.translate('Settings'), '设置');
assert.equal(t.setLocale('fr-FR'), false, 'Unknown languages require a pack');

const pack = { locale: 'fr-FR', name: 'Français', translations: {
  Settings: 'Paramètres',
  'Install APK': 'Installer un APK',
}};
assert.equal(t.installPack(pack).locale, 'fr-FR');
assert.equal(t.setLocale('fr-FR'), true);
assert.equal(t.translate('Settings'), 'Paramètres');
assert.equal(t.translate('Install APK'), 'Installer un APK');
assert.equal(t.translate('Get started'), 'Get started', 'Missing translations must fall back to English');
assert.equal(persisted.get('apkstart.interface.locale'), 'fr-FR');
assert.ok(t.available().some((language) => language.locale === 'fr-FR'));
const restarted = createEngine(persisted).t;
assert.equal(restarted.getLocale(), 'fr-FR');
assert.equal(restarted.translate('Settings'), 'Paramètres');
assert.throws(() => restarted.installPack({ locale: 'invalid locale', translations: {} }), /Invalid language pack/);

const html = read('src/ui/index.html');
assert.match(html, /id="setUiLanguage"/);
assert.match(html, /id="localePackFile"/);
assert.ok(html.indexOf('<script src="i18n.js"></script>') < html.indexOf('<script src="app.js"></script>'));

const store = require('../src/core/store');
assert.equal(store.DEFAULT_SETTINGS.ui.language, 'en-US');
assert.equal(store.DEFAULT_SETTINGS.engine.locale, 'en-US');

const englishManual = read('src/ui/manual-en.html');
const chineseManual = read('src/ui/manual.html');
const manual = require('../src/core/manual');
for (const topic of Object.values(manual.TOPICS)) {
  assert.ok(englishManual.includes('id="' + topic.anchor + '"'), 'Missing English manual anchor: ' + topic.anchor);
  assert.ok(chineseManual.includes('id="' + topic.anchor + '"'), 'Missing Chinese manual anchor: ' + topic.anchor);
}

console.log('Language switching, imports, fallback, persistence, settings and manual anchors: PASS');

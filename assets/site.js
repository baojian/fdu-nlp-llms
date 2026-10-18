/* Language enhancement; the complete Chinese page also works without JavaScript. */
(() => {
  'use strict';

  const storageKey = 'fdu-nlp-llms-language';
  const valid = value => value === 'zh' || value === 'en';
  const titles = {
    zh: '自然语言处理与大语言模型 · 复旦大学',
    en: 'Natural Language Processing and LLMs · Fudan University'
  };
  let preferred = 'zh';
  try { preferred = localStorage.getItem(storageKey) || preferred; } catch { /* Storage is optional. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  let current = valid(requested) ? requested : valid(preferred) ? preferred : 'zh';

  function setLanguage(language, updateURL = false) {
    if (!valid(language)) return;
    current = language;
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelector('.english-title').lang = language === 'zh' ? 'en' : 'zh-CN';
    document.title = titles[language];
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    try { localStorage.setItem(storageKey, language); } catch { /* Storage is optional. */ }
    if (updateURL && ['http:', 'https:'].includes(location.protocol)) {
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState(null, '', url);
    }
  }

  document.querySelectorAll('.lang-toggle').forEach(toggle => { toggle.hidden = false; });
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang, true));
  });
  window.addEventListener('popstate', () => {
    const language = new URLSearchParams(location.search).get('lang');
    setLanguage(valid(language) ? language : current);
  });
  setLanguage(current);

  // Keep the full roadmap in print, then restore the reader's disclosure state.
  let printState = [];
  window.addEventListener('beforeprint', () => {
    printState = [...document.querySelectorAll('.module')].map(module => [module, module.open]);
    printState.forEach(([module]) => { module.open = true; });
  });
  window.addEventListener('afterprint', () => {
    printState.forEach(([module, open]) => { module.open = open; });
    printState = [];
  });
})();

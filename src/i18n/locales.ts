// The languages the site is published in. English lives at the root; the others under their own
// folder, so each version has a URL of its own for search engines to index.
export const locales = [
  { code: 'en', dir: '', hreflang: 'en', og: 'en_US', name: 'English' },
  { code: 'de', dir: 'de/', hreflang: 'de', og: 'de_DE', name: 'Deutsch' },
  { code: 'es', dir: 'es/', hreflang: 'es', og: 'es_ES', name: 'Español' },
  { code: 'fr', dir: 'fr/', hreflang: 'fr', og: 'fr_FR', name: 'Français' },
  { code: 'pt-br', dir: 'pt-br/', hreflang: 'pt-BR', og: 'pt_BR', name: 'Português (Brasil)' },
  { code: 'ja', dir: 'ja/', hreflang: 'ja', og: 'ja_JP', name: '日本語' },
] as const;

export type Locale = (typeof locales)[number];
export type LocaleCode = Locale['code'];

export const locale = (code: LocaleCode) => locales.find((l) => l.code === code)!;

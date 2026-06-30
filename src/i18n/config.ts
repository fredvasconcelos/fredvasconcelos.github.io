export const languages = {
  'pt-BR': {
    code: 'pt-BR',
    path: '',
    label: 'Português do Brasil',
    shortLabel: 'PT-BR',
    flag: '/flags/br.svg',
  },
  es: {
    code: 'es',
    path: 'es',
    label: 'Español',
    shortLabel: 'ES',
    flag: '/flags/es.svg',
  },
  en: {
    code: 'en',
    path: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: '/flags/gb.svg',
  },
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'pt-BR';

export const locales = Object.keys(languages) as Locale[];
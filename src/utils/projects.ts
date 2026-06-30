import type { Locale } from '../i18n/config';

export const getProjectLocaleFolder = (locale: Locale) => {
  if (locale === 'pt-BR') {
    return 'pt-br';
  }

  return locale;
};

export const getProjectSlugFromId = (projectId: string) => {
  return projectId
    .replace(/^pt-BR\//i, '')
    .replace(/^pt-br\//i, '')
    .replace(/^es\//i, '')
    .replace(/^en\//i, '')
    .replace(/\.(md|mdx)$/, '');
};

export const projectBelongsToLocale = (projectId: string, locale: Locale) => {
  const localeFolder = getProjectLocaleFolder(locale);

  return projectId.toLowerCase().startsWith(`${localeFolder}/`);
};

export const getProjectHref = (slug: string, locale: Locale) => {
  if (locale === 'es') {
    return `/es/proyectos/${slug}`;
  }

  if (locale === 'en') {
    return `/en/projects/${slug}`;
  }

  return `/projetos/${slug}`;
};

export const getProjectsPageHref = (locale: Locale) => {
  if (locale === 'es') {
    return '/es/proyectos';
  }

  if (locale === 'en') {
    return '/en/projects';
  }

  return '/projetos';
};
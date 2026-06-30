import { defaultLocale, languages, type Locale } from './config';

export const getLocaleFromPathname = (pathname: string): Locale => {
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    return 'es';
  }

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en';
  }

  return defaultLocale;
};

export const removeLocalePrefix = (pathname: string) => {
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    return pathname.replace(/^\/es/, '') || '/';
  }

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '') || '/';
  }

  return pathname;
};

const normalizeRoute = (pathname: string) => {
  const cleanPath = removeLocalePrefix(pathname);

  if (cleanPath === '/proyectos' || cleanPath.startsWith('/proyectos/')) {
    return cleanPath.replace(/^\/proyectos/, '/projetos');
  }

  if (cleanPath === '/projects' || cleanPath.startsWith('/projects/')) {
    return cleanPath.replace(/^\/projects/, '/projetos');
  }

  return cleanPath;
};

export const getLocalizedPath = (pathname: string, locale: Locale) => {
  const normalizedPath = normalizeRoute(pathname);

  if (normalizedPath === '/projetos' || normalizedPath.startsWith('/projetos/')) {
    const suffix = normalizedPath.replace(/^\/projetos/, '');

    if (locale === 'pt-BR') {
      return `/projetos${suffix}`;
    }

    if (locale === 'es') {
      return `/es/proyectos${suffix}`;
    }

    if (locale === 'en') {
      return `/en/projects${suffix}`;
    }
  }

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return `/${languages[locale].path}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const getCurrentLocale = (pathname: string) => {
  return getLocaleFromPathname(pathname);
};
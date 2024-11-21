import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'cs-CZ'],
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pages/[pageId]': {
      en: '/pages/[pageId]',
      'cs-CZ': '/stranky/[pageId]'
    },
    '/categories/[categoryId]': {
      en: '/categories/[categoryId]',
      'cs-CZ': '/kategorie/[categoryId]'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
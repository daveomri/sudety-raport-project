import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as "en" | "cs-CZ")) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (
      await (locale === 'en'
        ? // this enables hmr for 'en' when using turbopack
        import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});

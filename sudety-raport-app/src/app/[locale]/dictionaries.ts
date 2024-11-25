'server-only';
 
export type Locale = keyof typeof dictionaries;
 
const dictionaries = {
  "en": () => import('./dictionaries/en.json').then((module) => module.default),
  "cs-CZ": () => import('./dictionaries/cs-CZ.json').then((module) => module.default),
};
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]();

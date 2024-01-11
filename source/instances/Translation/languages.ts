export const languages = [
  { id: 'en', iso3: 'Eng', name: 'English' },
  { id: 'ru', iso3: 'Rus', name: 'Русский' }
];
export const defaultLanguage = 'en';

export const userLanguages = ['en', 'ru'];
export const userDefaultLanguage = 'ru';

export function getLanguageFrom(pathName: string) {
  // TODO: optimize with split

  const lang = pathName.substring(1, 3);
  const validLang =
    pathName === `/${lang}` || pathName.startsWith(`/${lang}/`) || pathName.startsWith(`/${lang}?`);
  return validLang ? lang : '';
}

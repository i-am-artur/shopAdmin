export function getLanguageFrom(pathName: string) {
  const lang = pathName.substring(1, 3);
  const validLang =
    pathName === `/${lang}` || pathName.startsWith(`/${lang}/`) || pathName.startsWith(`/${lang}?`);
  return validLang ? lang : '';
}

import { routeBrands } from '@/app/[lang]/(authorized)/brands/src/routes';
import { routeCategories } from '@/app/[lang]/(authorized)/cats/src/routes';
import { routeProducts } from '@/app/[lang]/(authorized)/products/src/routes';
import { routeAuth } from '@/app/[lang]/auth/src/routes';

export const route = {
  auth: routeAuth,
  brands: routeBrands,
  categories: routeCategories,
  products: routeProducts
};

export function flattenUrls() {
  return Object.values(route)
    .map((el) => Object.values(el))
    .flat();
}

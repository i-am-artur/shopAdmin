import { routeAttributeGroups } from '@/app/[lang]/(authorized)/attributeGroups/src/routes';
import { routeBrands } from '@/app/[lang]/(authorized)/brands/src/routes';
import { routeCategories } from '@/app/[lang]/(authorized)/cats/src/routes';
import { routeCodes } from '@/app/[lang]/(authorized)/codes/src/routes';
import { routeOptionGroups } from '@/app/[lang]/(authorized)/optionGroups/src/routes';
import { routeProducts } from '@/app/[lang]/(authorized)/products/src/routes';
import { routeReviews } from '@/app/[lang]/(authorized)/reviews/src/routes';
import { routeAuth } from '@/app/[lang]/auth/src/routes';
import { routePages } from '@/app/[lang]/(authorized)/pages/src/routes';

export const route = {
  auth: routeAuth,
  brands: routeBrands,
  categories: routeCategories,
  products: routeProducts,
  attributeGroups: routeAttributeGroups,
  optionGroups: routeOptionGroups,
  codes: routeCodes,
  reviews: routeReviews,
  pages: routePages,
};

export function flattenUrls() {
  return Object.values(route)
    .map((el) => Object.values(el))
    .flat();
}

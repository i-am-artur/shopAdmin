import { routeAttributeGroups } from '@/app/[lang]/(authorized)/attributeGroups/src/routes';
import { routeBrands } from '@/app/[lang]/(authorized)/brands/src/routes';
import { routeCategories } from '@/app/[lang]/(authorized)/cats/src/routes';
import { routeCodes } from '@/app/[lang]/(authorized)/codes/src/routes';
import { routeOptionGroups } from '@/app/[lang]/(authorized)/optionGroups/src/routes';
import { routeProducts } from '@/app/[lang]/(authorized)/products/src/routes';
import { routeReviews } from '@/app/[lang]/(authorized)/reviews/src/routes';

export type NavItem =
  | {
      name: string;
      link: string;
    }
  | {
      name: string;
      subItems: NavItem[];
      expanded?: boolean;
    };

export const navItems: NavItem[] = [
  { name: 'Dashboard', link: '/' },
  {
    name: 'Catalog',
    subItems: [
      { name: 'Categories', link: routeCategories.index.path },
      { name: 'Products', link: routeProducts.index.path, expanded: true },
      { name: 'Brands', link: routeBrands.index.path },
      { name: 'Attribute templates', link: routeAttributeGroups.index.path },
      { name: 'Option templates', link: routeOptionGroups.index.path },
      { name: 'Codes', link: routeCodes.index.path },
      { name: 'Reviews', link: routeReviews.index.path },
    ],
  },
];

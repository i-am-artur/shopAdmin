import { route } from '@/source/routes/routes';

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
      { name: 'Categories', link: route.categories.index.path },
      { name: 'Products', link: route.products.index.path, expanded: true },
      { name: 'Brands', link: route.brands.index.path },
      { name: 'Attribute templates', link: route.attributeGroups.index.path },
      { name: 'Option templates', link: route.optionGroups.index.path },
      { name: 'Codes', link: route.codes.index.path },
    ],
  },
  { name: 'Reviews', link: route.reviews.index.path },
  { name: 'Pages', link: route.pages.index.path },
];

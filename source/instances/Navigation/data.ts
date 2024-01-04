import { routeBrands } from "@/app/[lang]/(authorized)/brands/src/routes";
import { routeCategories } from "@/app/[lang]/(authorized)/cats/src/routes";
import { routeProducts } from "@/app/[lang]/(authorized)/products/src/routes";

export type NavItem = {
  name: string;
  link: string;
} | {
  name: string;
  subItems: NavItem[];
};


export const navItems: NavItem[] = [
  { name: 'Dashboard', link: '/' },
  {
    name: 'Catalog',
    subItems: [
      { name: 'Categories', link: routeCategories.index.path },
      { name: 'Products', link: routeProducts.index.path },
      { name: 'Brands', link: routeBrands.index.path }
    ]
  }
];

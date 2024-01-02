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
      { name: 'Categories', link: '/' },
      { name: 'Products', link: '/' },
      { name: 'Brands', link: '/' }
    ]
  }
];

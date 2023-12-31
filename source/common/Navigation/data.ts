export interface INavItem {
  name: string;
  link?: string;
  children?: INavItem[];
}

export const navItems: INavItem[] = [
  { name: 'Home', link: '/' },
  {
    name: 'Catalog',
    children: [
      { name: 'Categories', link: '/' },
      { name: 'Products', link: '/' }
    ]
  }
];

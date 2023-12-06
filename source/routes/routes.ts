import { cats } from '@/source/routes/pages/cats';
import { products } from '@/source/routes/pages/products';
import { auth } from '@/source/routes/pages/auth';

export const urls = {
  auth: { ...auth },
  categories: { ...cats },
  products: { ...products }
};

export function flattenUrls() {
  return Object.values(urls)
    .map((el) => Object.values(el))
    .flat();
}

import { cats } from '@/source/routes/pages/cats';
import { products } from '@/source/routes/pages/products';

export const page = {
  auth: {
    login: {
      path: '/login',
      protected: false
    }
  },
  categories: { ...cats },
  products: { ...products }
};

import { Product } from '../types/Product';

export const sortProducts = (
  products: Product[], 
  originalProducts: Product[], 
  option: string
): Product[] => {
  switch (option) {
    case 'title':
      return [...products].sort((pr1, pr2) => pr1.title.localeCompare(pr2.title));
    case 'price':
      return [...products].sort((pr1, pr2) => pr1.price - pr2.price);
    case 'default':
    default:
      return originalProducts;
  }
};

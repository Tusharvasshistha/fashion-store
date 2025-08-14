// src/data/categories.ts
export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'sarees', name: 'Sarees', image: '/images/categories/sarees.jpg' },
  { id: 'kurtis', name: 'Kurtis', image: '/images/categories/kurtis.jpg' },
  { id: 'dresses', name: 'Dresses', image: '/images/categories/dresses.jpg' },
  { id: 'western', name: 'Western', image: '/images/categories/western.jpg' },
];

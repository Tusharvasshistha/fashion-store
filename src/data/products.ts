// src/data/products.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'saree1',
    name: 'Red Silk Saree',
    category: 'sarees',
    price: 2499,
    image: '/images/products/saree1.jpg',
    description: 'Elegant red silk saree with golden border.'
  },
  {
    id: 'saree2',
    name: 'Blue Georgette Saree',
    category: 'sarees',
    price: 1899,
    image: '/images/products/saree2.jpg',
    description: 'Trendy blue georgette saree with designer pallu.'
  },
  {
    id: 'kurti1',
    name: 'Pink Cotton Kurti',
    category: 'kurtis',
    price: 799,
    image: '/images/products/kurti1.jpg',
    description: 'Comfortable pink cotton kurti for daily wear.'
  },
  {
    id: 'kurti2',
    name: 'Green Rayon Kurti',
    category: 'kurtis',
    price: 999,
    image: '/images/products/kurti2.jpg',
    description: 'Trendy green rayon kurti with embroidery.'
  },
  {
    id: 'dress1',
    name: 'Floral Summer Dress',
    category: 'dresses',
    price: 1299,
    image: '/images/products/dress1.jpg',
    description: 'Lightweight floral dress perfect for summer.'
  },
  {
    id: 'western1',
    name: 'Denim Jacket',
    category: 'western',
    price: 1599,
    image: '/images/products/western1.jpg',
    description: 'Classic blue denim jacket for a casual look.'
  }
];

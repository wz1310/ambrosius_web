
export interface Product {
  id: string;
  name: string;
  category: 'Machine' | 'Beans';
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Solution {
  title: string;
  subtitle: string;
  image: string;
  size: 'half' | 'full';
}

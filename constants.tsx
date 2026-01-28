
import { Product, Solution } from './types';

export const BRANDS = [
  { name: 'Zummo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A7p8Pz-C5S9l6n7z_vO1_zXvYy3X-kX4_A&s' },
  { name: 'La San Marco', logo: 'https://lasanmarco.com/img/logo-sm.png' },
  { name: 'Il Doge', logo: 'https://ildoge.it/wp-content/uploads/2021/03/logo-ildoge-1.png' },
  { name: 'Robert Timms', logo: 'https://www.roberttimms.com.au/wp-content/uploads/2019/12/logo-robert-timms.png' },
  { name: 'Reneka', logo: 'https://www.reneka.com/wp-content/uploads/2018/06/logo-reneka.png' },
  { name: 'Schaerer', logo: 'https://www.schaerer.com/fileadmin/templates/images/logo.png' }
];

export const SOLUTIONS: Solution[] = [
  {
    title: 'Hotels',
    subtitle: 'Premium Hospitality Solutions',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1200&auto=format&fit=crop',
    size: 'half'
  },
  {
    title: 'Offices',
    subtitle: 'Better Coffee, Better Work',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    size: 'half'
  },
  {
    title: 'Cafes',
    subtitle: 'Artisan Precision Equipment',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    size: 'full'
  }
];

export const SOLUTIONS_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Bravilor Bonamat B10",
    category: 'Machine',
    description: "High-capacity round filter machines.",
    price: "Inquire",
    image: "https://www.bravilor.com/img/product/overview/B10.png",
    tags: ["High Capacity"]
  },
  {
    id: '2',
    name: "Bravilor Bonamat Sego 12",
    category: 'Machine',
    description: "Fully automatic bean-to-cup machine.",
    price: "Inquire",
    image: "https://www.bravilor.com/img/product/overview/Sego_12.png",
    tags: ["Automatic"]
  },
  {
    id: '10',
    name: "Fiorenzato 64E Pro",
    category: 'Machine',
    description: "Electronic coffee grinder with touchscreen.",
    price: "Inquire",
    image: "https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-PRO-nero-opaco-300x300.png",
    tags: ["Grinder"]
  },
  {
    id: '11',
    name: "Fiorenzato F4 Evo",
    category: 'Machine',
    description: "Compact coffee grinder for specialty coffee.",
    price: "Inquire",
    image: "https://www.fiorenzato.it/wp-content/uploads/2021/11/F4-E-NANO-nero-opaco-300x300.png",
    tags: ["Compact"]
  },
  {
    id: '12',
    name: "Fiorenzato F64 Evo",
    category: 'Machine',
    description: "The evolution of professional grinding.",
    price: "Inquire",
    image: "https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-V2-nero-opaco-300x300.png",
    tags: ["Grinder"]
  },
  {
    id: '13',
    name: "KaffaPro C3",
    category: 'Machine',
    description: "Sleek capsule machine for modern spaces.",
    price: "Inquire",
    image: "https://kaffapro.id/wp-content/uploads/2021/08/M8-1.png",
    tags: ["Capsule"]
  },
  {
    id: '14',
    name: "KaffaPro C7",
    category: 'Machine',
    description: "Advanced bean-to-cup solution.",
    price: "Inquire",
    image: "https://kaffapro.id/wp-content/uploads/2021/08/SC10.png",
    tags: ["Automatic"]
  },
  {
    id: '15',
    name: "KaffaPro C8",
    category: 'Machine',
    description: "Premium large capacity automatic machine.",
    price: "Inquire",
    image: "https://kaffapro.id/wp-content/uploads/2021/08/S300.png",
    tags: ["Automatic"]
  }
];

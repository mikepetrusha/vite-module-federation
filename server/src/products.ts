export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Whiskers',
    price: 5.99,
    description: 'A playful and affectionate Siamese cat.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      'Whiskers is a playful and affectionate Siamese cat. He loves cuddles and chasing toys around the house.',
  },
  {
    id: 2,
    name: 'Fluffy',
    price: 8.99,
    description: 'A gentle giant with a heart of gold.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      "Fluffy is a gentle giant with a heart of gold. Despite his size, he's incredibly sweet and loves to curl up in your lap for cuddles.",
  },
  {
    id: 3,
    name: 'Mittens',
    price: 7.99,
    description: 'Loves lounging in the sun and getting belly rubs.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      "Mittens loves lounging in the sun and getting belly rubs. She's a Persian beauty with a charming personality.",
  },
  {
    id: 4,
    name: 'Oreo',
    price: 7.99,
    description: 'A playful and mischievous little tuxedo cat.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      "Oreo is a playful and mischievous little tuxedo cat. He's always up to some kind of adventure and keeps his owners entertained with his antics.",
  },
  {
    id: 5,
    name: 'Smokey',
    price: 7.99,
    description: 'Reserved but affectionate Russian Blue.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      "Smokey is a reserved but affectionate Russian Blue. He may be shy at first, but once he warms up to you, he's a loyal companion.",
  },
  {
    id: 6,
    name: 'Shadow',
    price: 6.99,
    description: 'A mysterious and elegant black cat.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      'Shadow is a mysterious and elegant black cat. With piercing yellow eyes and a sleek coat, she moves with grace and agility.',
  },
  {
    id: 7,
    name: 'Leo',
    price: 9.99,
    description: 'A regal lion of a cat with a heart of gold.',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription:
      'Leo is a regal lion of a cat with a heart of gold. He commands attention wherever he goes and has a fierce loyalty to his human companions.',
  },
];

export default products;

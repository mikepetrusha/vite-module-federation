export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

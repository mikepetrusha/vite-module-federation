import { useEffect, useState } from "react";
import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";
import { Cart, CartItem } from "./types";

export default function CartContent() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const subscription = cart.subscribe((value: Cart) => {
      setItems(value?.cartItems ?? []);
    });
    return () => subscription.unsubscribe();
  }, []);

  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-10">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="col-span-4 font-bold text-right">
          {currency.format(total)}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex justify-between mb-10">
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={clearCart}>Checkout</button>
        </div>
      )}
    </>
  );
}

const CartItem = ({ item }: { item: CartItem }) => {
  return (
    <>
      <div>{item.quantity}</div>
      <img src={item.image} alt={item.name} className="max-h-6" />
      <div>{item.name}</div>
      <div className="text-right">
        {currency.format(item.quantity * item.price)}
      </div>
    </>
  );
};

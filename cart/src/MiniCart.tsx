import React, { useEffect, useState } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";
import { Cart, CartItem } from "./types";

export default function MiniCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const subscription = cart.subscribe((value: Cart | null) => {
      setItems(value?.cartItems ?? []);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)}>
        <i className="text-2xl ri-shopping-cart-2-fill"></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 text-black bg-white border-4 border-blue-800 rounded-xl"
            style={{
              width: 300,
              top: "2rem",
              left: -250,
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  className="px-5 py-2 text-sm text-green-800 bg-white border border-green-800 rounded-md"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                  className="px-5 py-2 text-sm text-white bg-green-900 rounded-md"
                  onClick={clearCart}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value: any) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-10">
        {items.map((item: any) => (
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
        <div className="text-right" id="grand_total">
          {currency.format(
            items.reduce((a: any, v: any) => a + v.quantity * v.price, 0)
          )}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
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
      )}
    </>
  );
}

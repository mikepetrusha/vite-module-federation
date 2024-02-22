import { useEffect, useState } from "react";
import { currency, getProducts } from "@/products";
import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from "react-router-dom";

export const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product: any) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="mt-4 text-sm">{product.description}</div>
          {loggedIn && (
            <div className="mt-2 text-right">
              <button
                className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

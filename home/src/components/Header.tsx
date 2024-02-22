import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export const Header = () => {
  return (
    <header className="p-4 text-center text-white bg-black">
      <div className="flex">
        <div className="flex flex-grow">
          <Link to="/">Fidget Spinner World</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="relative flex-end">
          <MiniCart />
          <Login />
        </div>
      </div>
    </header>
  );
};

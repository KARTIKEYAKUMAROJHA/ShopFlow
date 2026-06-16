import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  House,
  ShoppingBag,
  ShoppingCart,
  ClipboardList,
  User,
} from "lucide-react";

import CartContext from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%]">
      <nav
        className="
          rounded-full
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-lg
          px-6
          py-4
        "
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-bold text-blue-500"
          >
            ShopFlow
          </Link>

          <div className="hidden md:flex gap-8">

            <Link
              to="/"
              className="flex items-center gap-2 hover:scale-105 duration-300"
            >
              <House size={20} />
              Home
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-2 hover:scale-105 duration-300"
            >
              <ShoppingBag size={20} />
              Products
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-2 hover:scale-105 duration-300"
            >
              <ShoppingCart size={20} />
              Cart ({cartItems.length})
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-2 hover:scale-105 duration-300"
            >
              <ClipboardList size={20} />
              Orders
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2 hover:scale-105 duration-300"
            >
              <User size={20} />
              Profile
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
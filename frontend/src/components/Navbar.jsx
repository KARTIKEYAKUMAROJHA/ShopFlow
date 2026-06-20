import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  Grid2X2,
  ClipboardList,
  ShoppingCart,
  Search,
  Menu,
  User,
  LayoutDashboard,
  PlusSquare,
  Package,
  Users,
  Settings,
  Moon,
  Sun,
  LogOut,
  BadgeHelp,
  Package2,
} from "lucide-react";

import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";

function Navbar() {

  const { cartItems } = useContext(
    CartContext
  );

  const {
    user,
    role,
    isAuthenticated,
    logout,
  } = useContext(
    AuthContext
  );

  const [menuOpen, setMenuOpen] = useState(
    false
  );

  const [darkMode, setDarkMode] = useState(
    false
  );

  return (

    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1800px]">

      <nav
        className="
        rounded-[40px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-[0_10px_60px_rgba(0,0,0,0.08)]
        px-6
        py-5
      "
      >

        <div className="flex items-center justify-between gap-5">

          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
          >

            <Package2
              size={34}
              className="text-blue-500"
            />

            <h1 className="text-3xl font-bold">
              Shop
              <span className="text-blue-500">
                Flow
              </span>
            </h1>

          </Link>

          <div className="hidden lg:flex items-center gap-3">

            <Link
              to="/"
              className="
              flex items-center gap-2
              px-6 py-4
              rounded-full
              bg-white/50
              shadow-lg
              hover:bg-blue-500
              hover:text-white
              duration-300
            "
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              to="/products"
              className="
              flex items-center gap-2
              px-5 py-4
              rounded-full
              hover:bg-white/50
              duration-300
            "
            >
              <ShoppingBag size={20} />
              Products
            </Link>

            <Link
              to="/categories"
              className="
              flex items-center gap-2
              px-5 py-4
              rounded-full
              hover:bg-white/50
              duration-300
            "
            >
              <Grid2X2 size={20} />
              Categories
            </Link>

            {

              isAuthenticated && (

                <Link
                  to="/orders"
                  className="
                  flex items-center gap-2
                  px-5 py-4
                  rounded-full
                  hover:bg-white/50
                  duration-300
                "
                >
                  <ClipboardList size={20} />
                  Orders
                </Link>

              )

            }

            {

              isAuthenticated && (

                <Link
                  to="/cart"
                  className="
                  relative
                  px-5 py-4
                  rounded-full
                  hover:bg-white/50
                  duration-300
                "
                >

                  <ShoppingCart size={23} />

                  {

                    cartItems.length > 0 && (

                      <span
                        className="
                        absolute
                        top-2
                        right-2
                        bg-red-500
                        text-white
                        text-xs
                        h-5
                        w-5
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                      >
                        {cartItems.length}
                      </span>

                    )

                  }

                </Link>

              )

            }

          </div>

          <div className="flex items-center gap-4">

            <div
              className="
              hidden md:flex
              items-center
              gap-3
              bg-white/40
              rounded-full
              px-6
              py-4
              w-[260px]
              xl:w-[320px]
            "
            >

              <Search size={20} />

              <input
                type="text"
                placeholder="Search products..."
                className="
                bg-transparent
                outline-none
                w-full
                placeholder:text-gray-500
              "
              />

            </div>

            {

              !user ? (

                <Link
                  to="/login"
                  className="
                  text-white
                  font-semibold
                  px-10
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-400
                  shadow-xl
                  hover:scale-105
                  duration-300
                  shrink-0
                "
                >
                  Login
                </Link>

              ) : (

                <button
                  onClick={logout}
                  className="
                  bg-red-500
                  text-white
                  rounded-full
                  px-8
                  py-4
                  flex
                  items-center
                  gap-2
                "
                >

                  <LogOut size={18} />
                  Logout

                </button>

              )

            }

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
              bg-white/50
              p-4
              rounded-full
              shadow-lg
              hover:scale-110
              duration-300
              shrink-0
            "
            >
              <Menu size={24} />
            </button>

          </div>

        </div>

      </nav>

      {

        menuOpen && (

          <div
            className="
            absolute
            right-0
            mt-4
            w-[310px]
            rounded-[35px]
            border border-white/20
            bg-white/25
            backdrop-blur-3xl
            shadow-2xl
            overflow-hidden
          "
          >

            <div className="p-7 space-y-6">

              <div className="flex items-center gap-4">
                <Sun size={22} />
                Day Mode
              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <Moon size={22} />
                  Night Mode
                </div>

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />

              </div>

              <hr />

              {

                isAuthenticated && (

                  <Link
                    to="/profile"
                    className="flex items-center gap-4 hover:text-blue-500 duration-300"
                  >
                    <User size={21} />
                    Profile
                  </Link>

                )

              }

              {

                role === "ADMIN" && (

                  <>

                    <Link
                      to="/admin/dashboard"
                      className="flex items-center gap-4 hover:text-blue-500 duration-300"
                    >
                      <LayoutDashboard size={21} />
                      Dashboard
                    </Link>

                    <Link
                      to="/admin/add-product"
                      className="flex items-center gap-4 hover:text-blue-500 duration-300"
                    >
                      <PlusSquare size={21} />
                      Add Product
                    </Link>

                    <Link
                      to="/admin/manage-products"
                      className="flex items-center gap-4 hover:text-blue-500 duration-300"
                    >
                      <Package size={21} />
                      Manage Products
                    </Link>

                    <Link
                      to="/admin/manage-users"
                      className="flex items-center gap-4 hover:text-blue-500 duration-300"
                    >
                      <Users size={21} />
                      Manage Users
                    </Link>

                  </>

                )

              }

              <Link
                to="/settings"
                className="flex items-center gap-4 hover:text-blue-500 duration-300"
              >
                <Settings size={21} />
                System Preferences
              </Link>

              <Link
                to="/help"
                className="flex items-center gap-4 hover:text-blue-500 duration-300"
              >
                <BadgeHelp size={21} />
                Help Center
              </Link>

            </div>

          </div>

        )

      }

    </header>

  );

}

export default Navbar;


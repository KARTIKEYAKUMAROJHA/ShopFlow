import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
} from "lucide-react";

import CartContext from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {
        cartItems.length === 0 ? (

          <div
            className="
            rounded-3xl
            border border-white/20
            bg-white/15
            backdrop-blur-xl
            shadow-lg
            p-10
            text-center
          "
          >

            <ShoppingCart
              size={60}
              className="mx-auto text-blue-500"
            />

            <h2 className="text-3xl font-bold mt-6">
              Your Cart Is Empty
            </h2>

          </div>

        ) : (

          <>

            <div className="space-y-8">

              {

                cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="
                    rounded-3xl
                    border border-white/20
                    bg-white/15
                    backdrop-blur-xl
                    shadow-lg
                    p-8
                    flex justify-between items-center
                  "
                  >

                    <div>

                      <h2 className="text-3xl font-bold">
                        {item.name}
                      </h2>

                      <p className="mt-4 text-blue-500 text-2xl">
                        ₹{item.price}
                      </p>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                      bg-red-500
                      text-white
                      p-4
                      rounded-full
                    "
                    >

                      <Trash2 />

                    </button>

                  </div>

                ))

              }

            </div>

            <div
              className="
              rounded-3xl
              border border-white/20
              bg-white/15
              backdrop-blur-xl
              shadow-lg
              p-10
              mt-10
            "
            >

              <h1 className="text-4xl font-bold">
                Total : ₹{totalPrice}
              </h1>

              <Link
                to="/checkout"
              >

                <button
                  className="
                  mt-8
                  w-full
                  bg-blue-500
                  text-white
                  p-4
                  rounded-full
                  hover:scale-105
                  duration-300
                "
                >

                  Proceed To Checkout

                </button>

              </Link>

            </div>

          </>

        )
      }

    </div>
  );
}

export default Cart;
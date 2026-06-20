import {
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
  BadgeIndianRupee,
  ShieldCheck,
  Truck,
  TicketPercent,
} from "lucide-react";

import CartContext from "../context/CartContext";

import AuthContext from "../context/AuthContext";

import {
  getCartByUserId,
} from "../services/cartService";

import {
  getProductById,
} from "../services/productService";

function Cart() {

  const {
    removeFromCart,
  } = useContext(
    CartContext
  );

  const { user } =
    useContext(
      AuthContext
    );

  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {

    async function fetchCart() {

      try {

        if (!user?.id) {

          return;

        }

        const cartResponse =
          await getCartByUserId(
            user.id
          );

        const products =
          await Promise.all(

            cartResponse.map(

              async (item) => {

                const product =
                  await getProductById(
                    item.productId
                  );

                return {

                  ...product,

                  cartId:
                    item.id,

                  quantity:
                    item.quantity,

                };

              }

            )

          );

        setCartItems(
          products
        );

      }

      catch (error) {

        console.log(
          error
        );

      }

    }

    fetchCart();

  }, [user]);

  const subtotal = cartItems.reduce(

    (total, item) =>

      total + item.price,

    0

  );

  const shippingCharge =
    cartItems.length > 0
      ? 99
      : 0;

  const totalPrice =
    subtotal + shippingCharge;

  return (

    <div className="space-y-14">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl lg:text-7xl font-bold">

            Shopping Cart

          </h1>

          <p className="text-gray-500 text-xl mt-5">

            Review your selected products.

          </p>

        </div>

        <div
          className="
          rounded-full
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-xl
          px-8
          py-5
          text-xl
        "
        >

          {cartItems.length} Items

        </div>

      </div>

      {

        cartItems.length === 0

          ?

          (

            <div
              className="
              rounded-[55px]
              border border-white/20
              bg-white/20
              backdrop-blur-3xl
              shadow-2xl
              p-24
              text-center
            "
            >

              <ShoppingCart
                size={90}
                className="
                text-blue-500
                mx-auto
              "
              />

              <h1
                className="
                text-5xl
                font-bold
                mt-10
              "
              >

                Your Cart Is Empty

              </h1>

              <p className="text-gray-500 text-xl mt-6">

                Start adding products to enjoy premium shopping.

              </p>

              <Link
                to="/products"
              >

                <button
                  className="
                  mt-10
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  text-white
                  px-10
                  py-5
                  rounded-full
                  text-xl
                  shadow-xl
                  hover:scale-105
                  duration-300
                "
                >

                  Explore Products

                </button>

              </Link>

            </div>

          )

          :

          (

            <div className="grid lg:grid-cols-3 gap-10">

              {/* LEFT */}

              <div className="lg:col-span-2 space-y-8">

                {

                  cartItems.map(

                    (item) => (

                      <div
                        key={item.id}
                        className="
                        rounded-[45px]
                        border border-white/20
                        bg-white/20
                        backdrop-blur-3xl
                        shadow-xl
                        p-8
                      "
                      >

                        <div className="flex flex-col md:flex-row gap-8 items-center">

                          <img
                            src={
                              item.imageUrl
                                ? item.imageUrl
                                : "https://picsum.photos/400"
                            }
                            className="
                            h-40
                            w-40
                            rounded-[30px]
                            object-cover
                          "
                          />

                          <div className="flex-1">

                            <h1 className="text-3xl font-bold">

                              {item.name}

                            </h1>

                            <p className="text-gray-500 mt-4">

                              Premium Collection

                            </p>

                            <div className="flex items-center gap-3 mt-6">

                              <BadgeIndianRupee
                                className="
                                text-green-500
                              "
                              />

                              <h2 className="text-3xl font-bold text-blue-600">

                                {item.price}

                              </h2>

                            </div>

                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(
                                item.cartId
                              )
                            }
                            className="
                            h-16
                            w-16
                            rounded-full
                            bg-red-500
                            text-white
                            flex
                            items-center
                            justify-center
                            hover:scale-105
                            duration-300
                          "
                          >

                            <Trash2 />

                          </button>

                        </div>

                      </div>

                    )

                  )

                }

              </div>

              {/* RIGHT */}

              <div
                className="
                rounded-[50px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-2xl
                p-10
                h-fit
                sticky
                top-36
              "
              >

                <h1 className="text-4xl font-bold">

                  Order Summary

                </h1>

                <div className="space-y-8 mt-12">

                  <div className="flex justify-between">

                    <span className="text-gray-500">

                      Subtotal

                    </span>

                    <span>

                      ₹{subtotal}

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">

                      Shipping

                    </span>

                    <span>

                      ₹{shippingCharge}

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">

                      Discount

                    </span>

                    <span className="text-green-600">

                      ₹0

                    </span>

                  </div>

                  <hr />

                  <div className="flex justify-between text-3xl font-bold">

                    <span>

                      Total

                    </span>

                    <span className="text-blue-600">

                      ₹{totalPrice}

                    </span>

                  </div>

                </div>

                {/* Coupon */}

                <div
                  className="
                  mt-12
                  rounded-[30px]
                  bg-white/30
                  p-6
                "
                >

                  <div className="flex items-center gap-3">

                    <TicketPercent
                      className="text-blue-500"
                    />

                    <h2 className="font-bold">

                      Coupons Available

                    </h2>

                  </div>

                  <p className="text-gray-500 mt-4">

                    Apply coupon during checkout.

                  </p>

                </div>

                {/* Checkout */}

                <Link to="/checkout">

                  <button
                    className="
                    mt-12
                    w-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    text-white
                    py-5
                    rounded-full
                    text-2xl
                    shadow-xl
                    hover:scale-[1.03]
                    duration-300
                  "
                  >

                    Proceed To Checkout

                  </button>

                </Link>

                {/* Trust */}

                <div className="space-y-6 mt-12">

                  <div className="flex items-center gap-4">

                    <ShieldCheck
                      className="
                      text-green-500
                    "
                    />

                    Secure Payments

                  </div>

                  <div className="flex items-center gap-4">

                    <Truck
                      className="
                      text-blue-500
                    "
                    />

                    Free Delivery Available

                  </div>

                </div>

              </div>

            </div>

          )

      }

    </div>

  );

}

export default Cart;
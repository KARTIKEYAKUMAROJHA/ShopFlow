import {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  CreditCard,
  Wallet,
  Landmark,
  ShieldCheck,
  BadgeIndianRupee,
  MapPin,
  TicketPercent,
  Truck,
} from "lucide-react";

import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";

import {
  createOrder,
} from "../services/orderService";

function Checkout() {

  const navigate =
    useNavigate();

  const {
    cartItems,
    clearCart,
  } = useContext(
    CartContext
  );

  const { user } =
    useContext(
      AuthContext
    );

  const [paymentMethod, setPaymentMethod] =
    useState("UPI");

  const subtotal = cartItems.reduce(

    (total, item) =>

      total + item.price,

    0

  );

  const shippingCharge =
    cartItems.length > 0
      ? 99
      : 0;

  const totalAmount =
    subtotal + shippingCharge;

  async function handlePlaceOrder() {

    try {

      const request = {

        userId:
          user?.id,

        totalAmount,

      };

      await createOrder(
        request
      );

     toast.success(
  "Order Placed Successfully"
);

      clearCart();

      navigate(
        "/orders"
      );

    }

    catch (error) {

      console.log(
        error
      );

     toast.error(
  "Failed To Place Order"
);

    }

  }

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-5xl lg:text-7xl font-bold">

          Checkout

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Complete your premium shopping experience.

        </p>

      </div>

      <div className="grid xl:grid-cols-3 gap-10">

        {/* LEFT */}

        <div className="xl:col-span-2 space-y-10">

          {/* ADDRESS */}

          <div
            className="
            rounded-[50px]
            border border-white/20
            bg-white/20
            backdrop-blur-3xl
            shadow-2xl
            p-12
          "
          >

            <div className="flex items-center gap-4">

              <MapPin
                className="text-red-500"
              />

              <h2 className="text-4xl font-bold">

                Delivery Address

              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <input
                placeholder="Full Name"
                className="
                p-5
                rounded-[25px]
                bg-white/40
                outline-none
              "
              />

              <input
                placeholder="Phone Number"
                className="
                p-5
                rounded-[25px]
                bg-white/40
                outline-none
              "
              />

              <input
                placeholder="City"
                className="
                p-5
                rounded-[25px]
                bg-white/40
                outline-none
              "
              />

              <input
                placeholder="Pincode"
                className="
                p-5
                rounded-[25px]
                bg-white/40
                outline-none
              "
              />

            </div>

            <textarea
              rows="4"
              placeholder="Full Address"
              className="
              mt-6
              w-full
              p-5
              rounded-[25px]
              bg-white/40
              outline-none
            "
            />

          </div>

          {/* PAYMENT */}

          <div
            className="
            rounded-[50px]
            border border-white/20
            bg-white/20
            backdrop-blur-3xl
            shadow-2xl
            p-12
          "
          >

            <h2 className="text-4xl font-bold mb-10">

              Payment Method

            </h2>

            <div className="space-y-6">

              <button
                onClick={() =>
                  setPaymentMethod(
                    "Card"
                  )
                }
                className={`
                w-full
                flex
                items-center
                gap-5
                p-7
                rounded-[30px]
                duration-300

                ${

                  paymentMethod === "Card"

                    ?

                    "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-xl"

                    :

                    "bg-white/40"

                }

              `}
              >

                <CreditCard size={40} />

                <div className="text-left">

                  <h2 className="text-2xl font-bold">

                    Credit Card

                  </h2>

                  <p>

                    Visa / MasterCard

                  </p>

                </div>

              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "UPI"
                  )
                }
                className={`
                w-full
                flex
                items-center
                gap-5
                p-7
                rounded-[30px]
                duration-300

                ${

                  paymentMethod === "UPI"

                    ?

                    "bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-xl"

                    :

                    "bg-white/40"

                }

              `}
              >

                <Wallet size={40} />

                <div className="text-left">

                  <h2 className="text-2xl font-bold">

                    UPI Payment

                  </h2>

                  <p>

                    GPay • Paytm • PhonePe

                  </p>

                </div>

              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "Bank"
                  )
                }
                className={`
                w-full
                flex
                items-center
                gap-5
                p-7
                rounded-[30px]
                duration-300

                ${

                  paymentMethod === "Bank"

                    ?

                    "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-xl"

                    :

                    "bg-white/40"

                }

              `}
              >

                <Landmark size={40} />

                <div className="text-left">

                  <h2 className="text-2xl font-bold">

                    Net Banking

                  </h2>

                  <p>

                    All Major Banks Supported

                  </p>

                </div>

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
          h-fit
          sticky
          top-36
          rounded-[50px]
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-2xl
          p-10
        "
        >

          <h2 className="text-4xl font-bold">

            Order Summary

          </h2>

          <div className="space-y-6 mt-10">

            {

              cartItems.map(

                item => (

                  <div
                    key={item.id}
                    className="
                    flex
                    justify-between
                  "
                  >

                    <span>

                      {item.name}

                    </span>

                    <span>

                      ₹{item.price}

                    </span>

                  </div>

                )

              )

            }

          </div>

          <div className="space-y-6 mt-10">

            <div className="flex justify-between">

              <span>

                Subtotal

              </span>

              <span>

                ₹{subtotal}

              </span>

            </div>

            <div className="flex justify-between">

              <span>

                Shipping

              </span>

              <span>

                ₹{shippingCharge}

              </span>

            </div>

          </div>

          <div
            className="
            mt-10
            p-6
            rounded-[30px]
            bg-white/40
          "
          >

            <div className="flex items-center gap-3">

              <TicketPercent
                className="
                text-blue-500
              "
              />

              Coupons Available

            </div>

          </div>

          <hr className="my-10" />

          <div className="flex items-center gap-3">

            <BadgeIndianRupee
              className="text-green-500"
            />

            <h1 className="text-5xl font-bold">

              {totalAmount}

            </h1>

          </div>

          <button
            onClick={
              handlePlaceOrder
            }
            className="
            mt-10
            w-full
            py-5
            rounded-full
            text-2xl
            text-white
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            shadow-2xl
            hover:scale-[1.03]
            duration-300
          "
          >

            Pay Now

          </button>

          <div className="space-y-6 mt-10">

            <div className="flex items-center gap-4">

              <ShieldCheck
                className="text-green-500"
              />

              Secure Payment

            </div>

            <div className="flex items-center gap-4">

              <Truck
                className="text-blue-500"
              />

              Free Delivery Available

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Checkout;
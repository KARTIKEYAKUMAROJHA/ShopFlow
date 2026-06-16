import {
  CreditCard,
  Wallet,
} from "lucide-react";

function Checkout() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div
        className="
        max-w-2xl
        rounded-3xl
        border border-white/20
        bg-white/15
        backdrop-blur-xl
        shadow-lg
        p-10
      "
      >

        <div className="space-y-8">

          <div className="flex gap-4">

            <CreditCard
              className="text-blue-500"
            />

            <h2 className="text-2xl">
              Credit Card
            </h2>

          </div>

          <div className="flex gap-4">

            <Wallet
              className="text-green-500"
            />

            <h2 className="text-2xl">
              UPI Payment
            </h2>

          </div>

          <button
            className="
            mt-8
            w-full
            bg-blue-500
            text-white
            p-4
            rounded-full
          "
          >
            Pay Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;
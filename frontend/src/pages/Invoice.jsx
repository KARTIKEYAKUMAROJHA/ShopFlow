import {
  Receipt,
  Package,
  Calendar,
//   BadgeIndianRupee,
  CreditCard,
  User,
  MapPin,
  ShieldCheck,
  Download,
} from "lucide-react";

function Invoice() {

  const invoice = {

    orderId: 1001,

    customer: "Kartik Ojha",

    product: "iPhone 17 Pro",

    quantity: 1,

    price: 149999,

    paymentMethod: "UPI",

    address:

      "New Delhi, India - 110001",

    date: "15 June 2026",

  };

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-bold">

            Invoice

          </h1>

          <p className="mt-5 text-xl text-gray-500">

            Order #{invoice.orderId}

          </p>

        </div>

        <button
          className="
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          px-8
          py-4
          rounded-full
          flex
          items-center
          gap-3
          shadow-xl
          hover:scale-105
          duration-300
        "
        >

          <Download />

          Download PDF

        </button>

      </div>

      {/* MAIN CARD */}

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

        <div className="flex items-center gap-5">

          <Receipt
            size={45}
            className="text-blue-500"
          />

          <h1 className="text-5xl font-bold">

            ShopFlow Invoice

          </h1>

        </div>

        {/* CUSTOMER */}

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          <div
            className="
            bg-white/40
            rounded-[35px]
            p-8
          "
          >

            <div className="flex items-center gap-3">

              <User className="text-blue-500" />

              <h2 className="text-3xl font-bold">

                Customer

              </h2>

            </div>

            <p className="mt-8 text-xl">

              {invoice.customer}

            </p>

          </div>

          <div
            className="
            bg-white/40
            rounded-[35px]
            p-8
          "
          >

            <div className="flex items-center gap-3">

              <Calendar className="text-green-500" />

              <h2 className="text-3xl font-bold">

                Date

              </h2>

            </div>

            <p className="mt-8 text-xl">

              {invoice.date}

            </p>

          </div>

        </div>

        {/* PRODUCT */}

        <div
          className="
          mt-12
          rounded-[40px]
          bg-white/40
          p-10
        "
        >

          <div className="flex items-center gap-3">

            <Package
              className="text-purple-500"
            />

            <h1 className="text-3xl font-bold">

              Product Details

            </h1>

          </div>

          <div className="space-y-8 mt-10">

            <div className="flex justify-between">

              <h2>Product</h2>

              <h2 className="font-bold">

                {invoice.product}

              </h2>

            </div>

            <div className="flex justify-between">

              <h2>Quantity</h2>

              <h2 className="font-bold">

                {invoice.quantity}

              </h2>

            </div>

            <div className="flex justify-between">

              <h2>Price</h2>

              <h2 className="font-bold">

                ₹{invoice.price}

              </h2>

            </div>

          </div>

        </div>

        {/* PAYMENT */}

        <div
          className="
          mt-12
          rounded-[40px]
          bg-white/40
          p-10
        "
        >

          <div className="flex items-center gap-3">

            <CreditCard
              className="text-orange-500"
            />

            <h1 className="text-3xl font-bold">

              Payment Details

            </h1>

          </div>

          <div className="space-y-8 mt-10">

            <div className="flex justify-between">

              <h2>Method</h2>

              <h2 className="font-bold">

                {invoice.paymentMethod}

              </h2>

            </div>

            <div className="flex justify-between">

              <h2>Total Amount</h2>

              <h2
                className="
                text-blue-600
                text-3xl
                font-bold
              "
              >

                ₹{invoice.price}

              </h2>

            </div>

          </div>

        </div>

        {/* ADDRESS */}

        <div
          className="
          mt-12
          rounded-[40px]
          bg-white/40
          p-10
        "
        >

          <div className="flex items-center gap-3">

            <MapPin
              className="text-red-500"
            />

            <h1 className="text-3xl font-bold">

              Shipping Address

            </h1>

          </div>

          <p className="mt-8 text-xl">

            {invoice.address}

          </p>

        </div>

      </div>

      {/* FOOTER */}

      <section
        className="
        rounded-[55px]
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-indigo-500
        text-white
        p-14
      "
      >

        <div className="flex items-center gap-5">

          <ShieldCheck size={50} />

          <div>

            <h1 className="text-4xl font-bold">

              Verified ShopFlow Invoice

            </h1>

            <p className="text-xl mt-4">

              Generated securely using ShopFlow ecosystem.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Invoice;
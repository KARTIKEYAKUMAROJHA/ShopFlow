import {
  Package,
  Calendar,
  BadgeIndianRupee,
  Truck,
  CircleCheckBig,
  Clock3,
  MapPin,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

function OrderDetails() {

  const order = {

    id: 1001,

    product: "iPhone 17 Pro",

    image: "https://picsum.photos/900",

    price: 149999,

    quantity: 1,

    paymentMethod: "UPI",

    paymentStatus: "Paid",

    status: "Delivered",

    orderDate: "15 June 2026",

    address:

      "New Delhi, India - 110001",

  };

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Order Details

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Order ID : #{order.id}

        </p>

      </div>

      {/* MAIN CARD */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-10
      "
      >

        <div className="grid lg:grid-cols-2 gap-16">

          {/* IMAGE */}

          <div>

            <img
              src={order.image}
              alt=""
              className="
              w-full
              h-[500px]
              object-cover
              rounded-[40px]
            "
            />

          </div>

          {/* INFO */}

          <div className="flex flex-col justify-center">

            <div className="flex gap-4 items-center">

              <Package
                className="text-blue-500"
                size={35}
              />

              <h1 className="text-5xl font-bold">

                {order.product}

              </h1>

            </div>

            <div className="flex items-center gap-3 mt-10">

              <BadgeIndianRupee
                className="text-green-500"
              />

              <h2 className="text-4xl font-bold text-blue-600">

                ₹{order.price}

              </h2>

            </div>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">

                <Calendar />

                {order.orderDate}

              </div>

              <div className="flex items-center gap-4">

                <CreditCard
                  className="text-purple-500"
                />

                {order.paymentMethod}

              </div>

              <div className="flex items-center gap-4">

                <MapPin
                  className="text-red-500"
                />

                {order.address}

              </div>

              <div>

                {

                  order.status === "Delivered" &&

                  <div className="flex items-center gap-4">

                    <CircleCheckBig
                      className="text-green-500"
                    />

                    Delivered

                  </div>

                }

                {

                  order.status === "Shipping" &&

                  <div className="flex items-center gap-4">

                    <Truck
                      className="text-yellow-500"
                    />

                    Shipping

                  </div>

                }

                {

                  order.status === "Pending" &&

                  <div className="flex items-center gap-4">

                    <Clock3
                      className="text-red-500"
                    />

                    Pending

                  </div>

                }

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* PAYMENT */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-12
      "
      >

        <h1 className="text-4xl font-bold">

          Payment Information

        </h1>

        <div className="space-y-8 mt-10">

          <div className="flex justify-between">

            <h2>Payment Method</h2>

            <h2 className="font-bold">

              {order.paymentMethod}

            </h2>

          </div>

          <div className="flex justify-between">

            <h2>Payment Status</h2>

            <h2 className="text-green-500 font-bold">

              {order.paymentStatus}

            </h2>

          </div>

          <div className="flex justify-between">

            <h2>Quantity</h2>

            <h2 className="font-bold">

              {order.quantity}

            </h2>

          </div>

        </div>

      </div>

      {/* TRUST */}

      <section
        className="
        rounded-[55px]
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        p-14
      "
      >

        <div className="flex items-center gap-5">

          <ShieldCheck size={50} />

          <div>

            <h1 className="text-4xl font-bold">

              Secure Order Protection

            </h1>

            <p className="text-xl mt-4">

              Powered by ShopFlow Microservices and Kafka.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default OrderDetails;
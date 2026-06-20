import {
  Package,
  CircleCheckBig,
  Truck,
  MapPin,
  Clock3,
} from "lucide-react";

function TrackOrder() {

  const order = {
    id: "#1008",
    product: "iPhone 17 Pro",
    status: "Shipping",
    estimatedDate: "20 June 2026",
    address: "New Delhi, India",
  };

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Track Order

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Monitor your order status in real time.

        </p>

      </div>

      {/* ORDER CARD */}

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

          <Package
            className="text-blue-500"
            size={40}
          />

          <div>

            <h1 className="text-4xl font-bold">

              {order.product}

            </h1>

            <p className="text-gray-500 mt-3">

              Order ID : {order.id}

            </p>

          </div>

        </div>

      </div>

      {/* TRACKING STEPS */}

      <div className="space-y-8">

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          shadow-xl
          p-8
          flex items-center gap-6
        "
        >

          <CircleCheckBig
            size={40}
            className="text-green-500"
          />

          <div>

            <h1 className="text-2xl font-bold">

              Order Confirmed

            </h1>

            <p className="text-gray-500 mt-2">

              Payment received successfully.

            </p>

          </div>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          shadow-xl
          p-8
          flex items-center gap-6
        "
        >

          <Package
            size={40}
            className="text-purple-500"
          />

          <div>

            <h1 className="text-2xl font-bold">

              Packed

            </h1>

            <p className="text-gray-500 mt-2">

              Product packed and ready.

            </p>

          </div>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-blue-400
          backdrop-blur-3xl
          shadow-xl
          p-8
          flex items-center gap-6
        "
        >

          <Truck
            size={40}
            className="text-yellow-500"
          />

          <div>

            <h1 className="text-2xl font-bold">

              Shipping

            </h1>

            <p className="text-gray-500 mt-2">

              Your order is on the way.

            </p>

          </div>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          shadow-xl
          p-8
          flex items-center gap-6
        "
        >

          <MapPin
            size={40}
            className="text-red-500"
          />

          <div>

            <h1 className="text-2xl font-bold">

              Delivery Address

            </h1>

            <p className="text-gray-500 mt-2">

              {order.address}

            </p>

          </div>

        </div>

      </div>

      {/* DELIVERY */}

      <div
        className="
        rounded-[50px]
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        shadow-2xl
        p-12
      "
      >

        <div className="flex items-center gap-5">

          <Clock3 size={40} />

          <div>

            <h1 className="text-4xl font-bold">

              Estimated Delivery

            </h1>

            <p className="mt-4 text-xl">

              {order.estimatedDate}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default TrackOrder;
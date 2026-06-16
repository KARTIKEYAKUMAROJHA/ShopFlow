import {
  Package,
  CircleCheckBig,
  Truck,
} from "lucide-react";

function ManageOrders() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Manage Orders
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-lg
          p-8
        "
        >

          <div className="flex gap-4 items-center">

            <Package
              size={40}
              className="text-blue-500"
            />

            <div>

              <h2 className="text-3xl font-bold">
                Order #1001
              </h2>

              <p className="text-gray-500">
                iPhone 17 Pro
              </p>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <Truck className="text-yellow-500" />

            <h2>Shipping</h2>

          </div>

          <button
            className="
            mt-8
            bg-green-500
            text-white
            px-8
            py-3
            rounded-full
          "
          >
            Mark Delivered
          </button>

        </div>

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-lg
          p-8
        "
        >

          <div className="flex gap-4 items-center">

            <Package
              size={40}
              className="text-blue-500"
            />

            <div>

              <h2 className="text-3xl font-bold">
                Order #1002
              </h2>

              <p className="text-gray-500">
                MacBook M5
              </p>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <CircleCheckBig
              className="text-green-500"
            />

            <h2>Delivered</h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageOrders;
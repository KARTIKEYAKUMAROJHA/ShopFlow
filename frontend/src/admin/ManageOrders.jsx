import {
  Package,
  Truck,
  CircleCheckBig,
  Clock3,
  IndianRupee,
} from "lucide-react";

function ManageOrders() {

  return (

    <div>

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">
          Manage Orders
        </h1>

        <div
          className="
          rounded-full
          bg-white/15
          border border-white/20
          backdrop-blur-xl
          px-6
          py-3
          shadow-xl
        "
        >
          Total Orders : 24
        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-8
        "
        >

          <div className="flex items-center gap-5">

            <Package
              size={45}
              className="text-blue-500"
            />

            <div>

              <h1 className="text-3xl font-bold">
                Order #1001
              </h1>

              <p className="text-gray-500 mt-2">
                iPhone 17 Pro
              </p>

            </div>

          </div>

          <div className="space-y-5 mt-10">

            <div className="flex items-center gap-4">

              <IndianRupee
                className="text-green-500"
              />

              <h2>
                ₹149999
              </h2>

            </div>

            <div className="flex items-center gap-4">

              <Clock3
                className="text-yellow-500"
              />

              <h2>
                Pending
              </h2>

            </div>

            <div className="flex items-center gap-4">

              <Truck
                className="text-blue-500"
              />

              <h2>
                Shipping
              </h2>

            </div>

          </div>

          <button
            className="
            mt-10
            w-full
            bg-green-500
            text-white
            py-4
            rounded-full
            hover:scale-105
            duration-300
          "
          >
            Mark Delivered
          </button>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-8
        "
        >

          <div className="flex items-center gap-5">

            <Package
              size={45}
              className="text-purple-500"
            />

            <div>

              <h1 className="text-3xl font-bold">
                Order #1002
              </h1>

              <p className="text-gray-500 mt-2">
                MacBook M5
              </p>

            </div>

          </div>

          <div className="space-y-5 mt-10">

            <div className="flex items-center gap-4">

              <IndianRupee
                className="text-green-500"
              />

              <h2>
                ₹239999
              </h2>

            </div>

            <div className="flex items-center gap-4">

              <CircleCheckBig
                className="text-green-500"
              />

              <h2>
                Delivered
              </h2>

            </div>

          </div>

          <button
            className="
            mt-10
            w-full
            bg-blue-500
            text-white
            py-4
            rounded-full
            hover:scale-105
            duration-300
          "
          >
            View Details
          </button>

        </div>

      </div>

    </div>

  );

}

export default ManageOrders;
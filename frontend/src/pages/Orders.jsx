import { Package, Calendar, CircleCheckBig } from "lucide-react";

function Orders() {
  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        My Orders
      </h1>

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

        <div className="flex items-center gap-4">

          <Package
            size={40}
            className="text-blue-500"
          />

          <div>

            <h2 className="text-3xl font-bold">
              iPhone 17 Pro
            </h2>

            <p className="text-gray-500">
              ₹149999
            </p>

          </div>

        </div>

        <div className="mt-8 flex items-center gap-4">

          <Calendar className="text-gray-500" />

          <p>15 June 2026</p>

        </div>

        <div className="mt-4 flex items-center gap-4">

          <CircleCheckBig
            className="text-green-500"
          />

          <p>Delivered</p>

        </div>

      </div>

    </div>
  );
}

export default Orders;
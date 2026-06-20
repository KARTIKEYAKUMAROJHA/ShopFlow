import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  Star,
  TrendingUp,
  Activity,
  BadgeIndianRupee,
} from "lucide-react";

function Dashboard() {

  return (

    <div className="space-y-10">

      <h1 className="text-5xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

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

          <DollarSign
            size={45}
            className="text-green-500"
          />

          <h2 className="text-gray-500 text-xl mt-5">
            Total Sales
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            ₹125,480
          </h1>

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

          <ShoppingCart
            size={45}
            className="text-blue-500"
          />

          <h2 className="text-gray-500 text-xl mt-5">
            Active Orders
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            88
          </h1>

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

          <Package
            size={45}
            className="text-purple-500"
          />

          <h2 className="text-gray-500 text-xl mt-5">
            Products
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            124
          </h1>

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

          <Users
            size={45}
            className="text-yellow-500"
          />

          <h2 className="text-gray-500 text-xl mt-5">
            Customers
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            512
          </h1>

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

          <div className="flex items-center gap-4 mb-8">

            <TrendingUp
              className="text-blue-500"
            />

            <h2 className="text-3xl font-bold">
              Performance Summary
            </h2>

          </div>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between">

                <h2>
                  Revenue Growth
                </h2>

                <h2>
                  84%
                </h2>

              </div>

              <div className="bg-gray-200 rounded-full h-4 mt-3">

                <div className="bg-blue-500 h-4 rounded-full w-[84%]"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <h2>
                  Customer Satisfaction
                </h2>

                <h2>
                  92%
                </h2>

              </div>

              <div className="bg-gray-200 rounded-full h-4 mt-3">

                <div className="bg-green-500 h-4 rounded-full w-[92%]"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <h2>
                  Delivery Success
                </h2>

                <h2>
                  97%
                </h2>

              </div>

              <div className="bg-gray-200 rounded-full h-4 mt-3">

                <div className="bg-purple-500 h-4 rounded-full w-[97%]"></div>

              </div>

            </div>

          </div>

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

          <div className="flex items-center gap-4 mb-8">

            <Activity
              className="text-red-500"
            />

            <h2 className="text-3xl font-bold">
              Recent Activities
            </h2>

          </div>

          <div className="space-y-6">

            <h2>
              ✅ New order received
            </h2>

            <h2>
              ✅ Product added
            </h2>

            <h2>
              ✅ Payment successful
            </h2>

            <h2>
              ✅ Notification sent
            </h2>

            <h2>
              ✅ Customer registered
            </h2>

          </div>

        </div>

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

        <h2 className="text-3xl font-bold mb-10">
          Top Sellers
        </h2>

        <table className="w-full">

          <thead>

          <tr className="text-left">

            <th>Name</th>
            <th>Orders</th>
            <th>Revenue</th>

          </tr>

          </thead>

          <tbody>

          <tr className="h-16">

            <td>James Martin</td>
            <td>136</td>
            <td>₹34500</td>

          </tr>

          <tr className="h-16">

            <td>Kanther Hiam</td>
            <td>128</td>
            <td>₹24900</td>

          </tr>

          <tr className="h-16">

            <td>Roly Salliman</td>
            <td>115</td>
            <td>₹24000</td>

          </tr>

          </tbody>

        </table>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

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

          <Star
            className="text-yellow-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-5">
            Reviews
          </h1>

          <h2 className="mt-5">
            Average Rating : 4.9/5
          </h2>

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

          <BadgeIndianRupee
            className="text-green-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-5">
            Profit
          </h1>

          <h2 className="mt-5">
            ₹86,400
          </h2>

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

          <Package
            className="text-blue-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-5">
            Categories
          </h1>

          <h2 className="mt-5">
            Electronics, Fashion, Shoes
          </h2>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
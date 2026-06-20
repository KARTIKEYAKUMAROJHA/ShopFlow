import {
  IndianRupee,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

function Analytics() {

  const topProducts = [

    {
      id: 1,
      name: "iPhone 17 Pro",
      sales: 142,
    },

    {
      id: 2,
      name: "MacBook M5",
      sales: 96,
    },

    {
      id: 3,
      name: "Apple Watch Ultra",
      sales: 74,
    },

  ];

  const lowStockProducts = [

    {
      id: 1,
      name: "Nike Air Max",
      stock: 3,
    },

    {
      id: 2,
      name: "Rolex Watch",
      stock: 2,
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Analytics Dashboard

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Business overview and statistics.

        </p>

      </div>

      {/* STATS */}

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <IndianRupee
            size={45}
            className="text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹12.8L

          </h1>

          <p className="text-gray-500 mt-4">

            Revenue

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <ShoppingBag
            size={45}
            className="text-blue-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            524

          </h1>

          <p className="text-gray-500 mt-4">

            Orders

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <Users
            size={45}
            className="text-purple-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            1260

          </h1>

          <p className="text-gray-500 mt-4">

            Users

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <Package
            size={45}
            className="text-orange-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            500+

          </h1>

          <p className="text-gray-500 mt-4">

            Products

          </p>

        </div>

      </div>

      {/* MONTHLY GROWTH */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          <TrendingUp
            className="text-green-500"
          />

          <h1 className="text-4xl font-bold">

            Monthly Growth

          </h1>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-10">

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-gray-500">

              January

            </h2>

            <h1 className="text-3xl font-bold mt-4">

              ₹2.2L

            </h1>

          </div>

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-gray-500">

              February

            </h2>

            <h1 className="text-3xl font-bold mt-4">

              ₹2.8L

            </h1>

          </div>

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-gray-500">

              March

            </h2>

            <h1 className="text-3xl font-bold mt-4">

              ₹3.4L

            </h1>

          </div>

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-gray-500">

              April

            </h2>

            <h1 className="text-3xl font-bold mt-4">

              ₹4.4L

            </h1>

          </div>

        </div>

      </div>

      {/* TOP PRODUCTS + LOW STOCK */}

      <div className="grid lg:grid-cols-2 gap-10">

        <div
          className="
          rounded-[50px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <h1 className="text-4xl font-bold mb-10">

            Top Products

          </h1>

          <div className="space-y-8">

            {

              topProducts.map(

                (product) => (

                  <div
                    key={product.id}
                    className="
                    bg-white
                    rounded-3xl
                    p-6
                    flex
                    justify-between
                  "
                  >

                    <h2 className="text-xl">

                      {product.name}

                    </h2>

                    <h2 className="font-bold">

                      {product.sales} Sales

                    </h2>

                  </div>

                )

              )

            }

          </div>

        </div>

        <div
          className="
          rounded-[50px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <div className="flex items-center gap-4 mb-10">

            <TriangleAlert
              className="text-red-500"
            />

            <h1 className="text-4xl font-bold">

              Low Stock Products

            </h1>

          </div>

          <div className="space-y-8">

            {

              lowStockProducts.map(

                (product) => (

                  <div
                    key={product.id}
                    className="
                    bg-white
                    rounded-3xl
                    p-6
                    flex
                    justify-between
                  "
                  >

                    <h2 className="text-xl">

                      {product.name}

                    </h2>

                    <h2 className="text-red-500 font-bold">

                      {product.stock} Left

                    </h2>

                  </div>

                )

              )

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Analytics;
import {
  TrendingUp,
  IndianRupee,
  ShoppingBag,
  Users,
  Package,
  Calendar,
} from "lucide-react";

function SalesReport() {

  const monthlySales = [

    {
      month: "January",
      revenue: "₹2.1L",
      orders: 84,
    },

    {
      month: "February",
      revenue: "₹2.8L",
      orders: 102,
    },

    {
      month: "March",
      revenue: "₹3.6L",
      orders: 140,
    },

    {
      month: "April",
      revenue: "₹4.2L",
      orders: 173,
    },

    {
      month: "May",
      revenue: "₹5.4L",
      orders: 216,
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Sales Report

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Monitor revenue and business performance.

        </p>

      </div>

      {/* OVERVIEW */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <IndianRupee
            className="mx-auto text-green-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹18.1L

          </h1>

          <h2 className="mt-4 text-xl">

            Total Revenue

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <ShoppingBag
            className="mx-auto text-blue-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            715

          </h1>

          <h2 className="mt-4 text-xl">

            Orders

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <Users
            className="mx-auto text-purple-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            1.2K

          </h1>

          <h2 className="mt-4 text-xl">

            Customers

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <Package
            className="mx-auto text-orange-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            500+

          </h1>

          <h2 className="mt-4 text-xl">

            Products

          </h2>

        </div>

      </div>

      {/* MONTHLY REPORT */}

      <div className="space-y-8">

        {

          monthlySales.map(

            (sale, index) => (

              <div
                key={index}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-xl
                p-8
              "
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-5">

                    <Calendar
                      className="text-blue-500"
                    />

                    <h1 className="text-3xl font-bold">

                      {sale.month}

                    </h1>

                  </div>

                  <TrendingUp
                    className="text-green-500"
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                  <div>

                    <h2 className="text-gray-500">

                      Revenue

                    </h2>

                    <h1 className="text-4xl font-bold text-green-500 mt-3">

                      {sale.revenue}

                    </h1>

                  </div>

                  <div>

                    <h2 className="text-gray-500">

                      Orders

                    </h2>

                    <h1 className="text-4xl font-bold text-blue-500 mt-3">

                      {sale.orders}

                    </h1>

                  </div>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default SalesReport;
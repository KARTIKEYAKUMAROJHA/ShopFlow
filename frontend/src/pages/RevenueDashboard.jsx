import {
  IndianRupee,
  TrendingUp,
  TrendingDown,
  CalendarDays,
  Wallet,
  CircleDollarSign,
} from "lucide-react";

function RevenueDashboard() {

  const revenues = [

    {
      month: "January",
      amount: "₹2.2L",
      growth: "+12%",
    },

    {
      month: "February",
      amount: "₹2.8L",
      growth: "+18%",
    },

    {
      month: "March",
      amount: "₹3.5L",
      growth: "+25%",
    },

    {
      month: "April",
      amount: "₹4.1L",
      growth: "+16%",
    },

    {
      month: "May",
      amount: "₹5.3L",
      growth: "+29%",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Revenue Dashboard

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Track monthly earnings and growth.

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
          shadow-xl
          p-10
          text-center
        "
        >

          <IndianRupee
            className="mx-auto text-green-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹17.9L

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
          shadow-xl
          p-10
          text-center
        "
        >

          <Wallet
            className="mx-auto text-blue-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹3.8L

          </h1>

          <h2 className="mt-4 text-xl">

            Current Month

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          shadow-xl
          p-10
          text-center
        "
        >

          <TrendingUp
            className="mx-auto text-green-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            +24%

          </h1>

          <h2 className="mt-4 text-xl">

            Growth

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          shadow-xl
          p-10
          text-center
        "
        >

          <CircleDollarSign
            className="mx-auto text-purple-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹5960

          </h1>

          <h2 className="mt-4 text-xl">

            Avg Order Value

          </h2>

        </div>

      </div>

      {/* MONTHLY REVENUE */}

      <div className="space-y-8">

        {

          revenues.map(

            (revenue, index) => (

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

                  <div className="flex items-center gap-4">

                    <CalendarDays
                      className="text-blue-500"
                    />

                    <h1 className="text-3xl font-bold">

                      {revenue.month}

                    </h1>

                  </div>

                  <div className="flex items-center gap-3">

                    <TrendingUp
                      className="text-green-500"
                    />

                    <span className="font-bold text-green-500">

                      {revenue.growth}

                    </span>

                  </div>

                </div>

                <div className="mt-10">

                  <h2 className="text-gray-500">

                    Revenue

                  </h2>

                  <h1 className="text-5xl font-bold text-blue-500 mt-3">

                    {revenue.amount}

                  </h1>

                </div>

              </div>

            )

          )

        }

      </div>

      {/* INSIGHTS */}

      <div
        className="
        rounded-[50px]
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-indigo-500
        text-white
        p-14
        shadow-2xl
      "
      >

        <div className="flex items-center gap-5">

          <TrendingDown size={50} />

          <div>

            <h1 className="text-4xl font-bold">

              Revenue Insights

            </h1>

            <p className="text-xl mt-5">

              Monthly sales have increased consistently over the last 5 months.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default RevenueDashboard;
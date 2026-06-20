import {
  CreditCard,
  Wallet,
  Landmark,
  CircleCheckBig,
  Clock3,
  BadgeIndianRupee,
  Calendar,
} from "lucide-react";

function PaymentHistory() {

  const payments = [

    {
      id: "#PAY1001",
      amount: 149999,
      method: "Credit Card",
      status: "Success",
      date: "15 June 2026",
    },

    {
      id: "#PAY1002",
      amount: 89999,
      method: "UPI",
      status: "Success",
      date: "12 June 2026",
    },

    {
      id: "#PAY1003",
      amount: 24999,
      method: "Net Banking",
      status: "Pending",
      date: "10 June 2026",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Payment History

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          View all your previous transactions.

        </p>

      </div>

      {/* SUMMARY */}

      <div className="grid lg:grid-cols-3 gap-8">

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

          <BadgeIndianRupee
            size={45}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹2.64L

          </h1>

          <h2 className="mt-4 text-xl">

            Total Payments

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

          <CircleCheckBig
            size={45}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            2

          </h1>

          <h2 className="mt-4 text-xl">

            Successful

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

          <Clock3
            size={45}
            className="mx-auto text-yellow-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            1

          </h1>

          <h2 className="mt-4 text-xl">

            Pending

          </h2>

        </div>

      </div>

      {/* PAYMENTS */}

      <div className="space-y-8">

        {

          payments.map(

            (payment) => (

              <div
                key={payment.id}
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

                  <div>

                    <h1 className="text-3xl font-bold">

                      {payment.id}

                    </h1>

                    <div className="flex items-center gap-3 mt-4">

                      <Calendar
                        className="text-blue-500"
                      />

                      <p className="text-gray-500">

                        {payment.date}

                      </p>

                    </div>

                  </div>

                  <div>

                    {

                      payment.method === "Credit Card" &&

                      <CreditCard
                        size={40}
                        className="text-blue-500"
                      />

                    }

                    {

                      payment.method === "UPI" &&

                      <Wallet
                        size={40}
                        className="text-green-500"
                      />

                    }

                    {

                      payment.method === "Net Banking" &&

                      <Landmark
                        size={40}
                        className="text-purple-500"
                      />

                    }

                  </div>

                </div>

                <div className="flex justify-between items-center mt-10">

                  <h2 className="text-4xl font-bold text-blue-500">

                    ₹{payment.amount}

                  </h2>

                  <div
                    className={`
                    px-6
                    py-3
                    rounded-full
                    text-white
                    ${
                      payment.status === "Success"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }
                  `}
                  >

                    {payment.status}

                  </div>

                </div>

                <div className="mt-6 text-gray-500">

                  Payment Method : {payment.method}

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default PaymentHistory;
import {
  TicketPercent,
  Copy,
  Gift,
  CalendarDays,
  BadgePercent,
} from "lucide-react";

function Coupons() {

  const coupons = [

    {
      id: 1,
      code: "WELCOME50",
      discount: "50% OFF",
      expiry: "31 Dec 2026",
    },

    {
      id: 2,
      code: "SHOP1000",
      discount: "₹1000 OFF",
      expiry: "15 Jan 2027",
    },

    {
      id: 3,
      code: "FREESHIP",
      discount: "Free Delivery",
      expiry: "28 Feb 2027",
    },

    {
      id: 4,
      code: "PREMIUM20",
      discount: "20% OFF",
      expiry: "30 Mar 2027",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Coupons & Offers

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Save more with exclusive ShopFlow deals.

        </p>

      </div>

      {/* HERO */}

      <div
        className="
        rounded-[50px]
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        p-14
        shadow-2xl
      "
      >

        <div className="flex items-center gap-5">

          <Gift size={50} />

          <div>

            <h1 className="text-5xl font-bold">

              Premium Offers

            </h1>

            <p className="text-xl mt-4">

              Unlock discounts and exclusive rewards.

            </p>

          </div>

        </div>

      </div>

      {/* COUPONS */}

      <div className="grid lg:grid-cols-2 gap-10">

        {

          coupons.map(

            (coupon) => (

              <div
                key={coupon.id}
                className="
                rounded-[45px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                p-10
              "
              >

                <div className="flex justify-between items-center">

                  <TicketPercent
                    size={45}
                    className="text-blue-500"
                  />

                  <div
                    className="
                    bg-green-100
                    px-5
                    py-2
                    rounded-full
                    text-green-600
                    font-bold
                  "
                  >

                    {coupon.discount}

                  </div>

                </div>

                <h1
                  className="
                  text-4xl
                  font-bold
                  mt-8
                "
                >

                  {coupon.code}

                </h1>

                <div className="flex items-center gap-3 mt-8">

                  <CalendarDays
                    className="text-orange-500"
                  />

                  <p className="text-gray-500">

                    Valid Until : {coupon.expiry}

                  </p>

                </div>

                <button
                  className="
                  mt-10
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  text-white
                  py-5
                  text-xl
                  flex
                  justify-center
                  items-center
                  gap-3
                  hover:scale-105
                  duration-300
                "
                >

                  <Copy />

                  Copy Code

                </button>

              </div>

            )

          )

        }

      </div>

      {/* BENEFITS */}

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

          <BadgePercent
            size={40}
            className="text-purple-500"
          />

          <h1 className="text-4xl font-bold">

            Benefits

          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-2xl font-bold">

              Extra Savings

            </h2>

            <p className="text-gray-500 mt-4">

              Enjoy special discounts.

            </p>

          </div>

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-2xl font-bold">

              Free Delivery

            </h2>

            <p className="text-gray-500 mt-4">

              Save on shipping charges.

            </p>

          </div>

          <div className="bg-white rounded-3xl p-8">

            <h2 className="text-2xl font-bold">

              Premium Rewards

            </h2>

            <p className="text-gray-500 mt-4">

              Exclusive member benefits.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Coupons;
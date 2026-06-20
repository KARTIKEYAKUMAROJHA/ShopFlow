import { useContext, useEffect, useState } from "react";
import {
  Package,
  Calendar,
  CircleCheckBig,
  Truck,
  Clock3,
  Eye,
  RotateCcw,
  Download,
  ShieldCheck,
  BadgeIndianRupee,
} from "lucide-react";

import AuthContext from "../context/AuthContext";
import { getOrdersByUser } from "../services/orderService";

function Orders() {

  /*
    Later these orders will come from
    Order-Service + Kafka Notifications.
    UI structure is already backend ready.
  */

  const { user } =
    useContext(AuthContext);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    async function fetchOrders() {

      try {

        if (!user?.id) {

          return;

        }

        const data =
          await getOrdersByUser(
            user.id
          );

        setOrders(data);

      }

      catch (error) {

        console.log(error);

      }

    }

    fetchOrders();

  }, [user]);

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl lg:text-7xl font-bold">

            My Orders

          </h1>

          <p className="text-xl text-gray-500 mt-5">

            Track and manage all your purchases.

          </p>

        </div>

        <div
          className="
          h-fit
          rounded-full
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-xl
          px-8
          py-5
        "
        >

          Total Orders : {orders.length}

        </div>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-8">

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-2xl
          p-10
          shadow-xl
          text-center
        "
        >

          <CircleCheckBig
            className="
            text-green-500
            mx-auto
          "
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            12

          </h1>

          <h2 className="mt-4 text-2xl">

            Delivered

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-2xl
          p-10
          shadow-xl
          text-center
        "
        >

          <Truck
            className="
            text-yellow-500
            mx-auto
          "
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            2

          </h1>

          <h2 className="mt-4 text-2xl">

            Shipping

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-2xl
          p-10
          shadow-xl
          text-center
        "
        >

          <Clock3
            className="
            text-red-500
            mx-auto
          "
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            1

          </h1>

          <h2 className="mt-4 text-2xl">

            Pending

          </h2>

        </div>

      </div>

      {/* ORDERS */}

      {

        orders.map(

          order => (

            <div
              key={order.id}
              className="
              rounded-[50px]
              border border-white/20
              bg-white/20
              backdrop-blur-3xl
              shadow-2xl
              p-8 lg:p-12
            "
            >

              <div className="grid lg:grid-cols-4 gap-10 items-center">

                {/* IMAGE */}

                <div>

                  <img
                    src={order.image}
                    alt=""
                    className="
                    h-60
                    w-full
                    object-cover
                    rounded-[35px]
                    hover:scale-[1.03]
                    duration-500
                  "
                  />

                </div>

                {/* INFO */}

                <div className="lg:col-span-2">

                  <div className="flex items-center gap-4">

                    <Package
                      className="text-blue-500"
                      size={35}
                    />

                    <h1 className="text-4xl font-bold">

                      Order #{order.id}

                    </h1>

                  </div>

                  <div className="flex items-center gap-3 mt-8">

                    <BadgeIndianRupee
                      className="text-green-500"
                    />

                    <h2 className="text-3xl font-bold text-blue-600">

                      ₹{order.totalAmount}

                    </h2>

                  </div>

                  <div className="flex items-center gap-4 mt-8">

                    <Calendar
                      className="text-gray-500"
                    />

                    {

                      new Date(
                        order.orderDate
                      ).toLocaleDateString()

                    }

                  </div>

                  <div className="mt-8">

                    <span
                      className="
                      px-5
                      py-3
                      rounded-full
                      bg-white/40
                    "
                    >

                      User ID : {order.userId}

                    </span>

                  </div>

                </div>

                {/* STATUS */}

                <div>

                  {

                    order.status === "DELIVERED" &&

                    <div className="flex gap-4 items-center">

                      <CircleCheckBig
                        className="text-green-500"
                      />

                      <h2 className="text-2xl">

                        Delivered

                      </h2>

                    </div>

                  }

                  {

                    order.status === "SHIPPING" &&

                    <div className="flex gap-4 items-center">

                      <Truck
                        className="text-yellow-500"
                      />

                      <h2 className="text-2xl">

                        Shipping

                      </h2>

                    </div>

                  }

                  {

                    order.status === "PLACED" &&

                    <div className="flex gap-4 items-center">

                      <Clock3
                        className="text-red-500"
                      />

                      <h2 className="text-2xl">

                        Pending

                      </h2>

                    </div>

                  }

                  {/* BUTTONS */}

                  <div className="space-y-4 mt-10">

                    <button
                      className="
                      w-full
                      rounded-full
                      py-4
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                      text-white
                      flex
                      justify-center
                      items-center
                      gap-3
                      hover:scale-105
                      duration-300
                    "
                    >

                      <Eye size={20} />

                      View Details

                    </button>

                    <button
                      className="
                      w-full
                      rounded-full
                      py-4
                      bg-white/40
                      flex
                      justify-center
                      items-center
                      gap-3
                      hover:scale-105
                      duration-300
                    "
                    >

                      <Download size={20} />

                      Invoice

                    </button>

                    {

                      order.status === "DELIVERED" &&

                      <button
                        className="
                        w-full
                        rounded-full
                        py-4
                        bg-white/40
                        flex
                        justify-center
                        items-center
                        gap-3
                        hover:scale-105
                        duration-300
                      "
                      >

                        <RotateCcw size={20} />

                        Return Order

                      </button>

                    }

                  </div>

                </div>

              </div>

            </div>

          )

        )

      }

      {/* TRUST */}

      <section
        className="
        rounded-[55px]
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-indigo-500
        text-white
        p-14
        shadow-2xl
      "
      >

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          <div>

            <h1 className="text-5xl font-bold">

              Secure Order Tracking

            </h1>

            <p className="text-xl mt-6">

              Powered by Spring Boot Microservices, Kafka and Docker.

            </p>

          </div>

          <div className="flex items-center gap-5">

            <ShieldCheck size={50} />

            <h2 className="text-3xl font-bold">

              ShopFlow Protection

            </h2>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Orders;
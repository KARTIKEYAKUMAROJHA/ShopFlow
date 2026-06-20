import { useState } from "react";
import {
  ShoppingBag,
  BadgeIndianRupee,
} from "lucide-react";
import { getAllOrders } from "../services/orderService";

function AdminOrders() {

  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {

    setLoaded(true);

    getAllOrders()

      .then((data) => {

        setOrders(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }

  return (

    <div className="space-y-10">

      <div>

        <h1 className="text-6xl font-bold">

          Orders

        </h1>

        <p className="text-gray-500 text-xl mt-5">

          Manage all customer orders.

        </p>

      </div>

      <div
        className="
        rounded-[40px]
        bg-white/20
        border
        border-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-10
      "
      >

        <div className="flex items-center gap-4">

          <ShoppingBag className="text-blue-500" />

          <h2 className="text-3xl font-bold">

            Total Orders : {orders.length}

          </h2>

        </div>

      </div>

      <div className="grid gap-8">

        {

          orders.map((order) => (

            <div

              key={order.id}

              className="
              rounded-[40px]
              bg-white/20
              border
              border-white/20
              backdrop-blur-3xl
              shadow-2xl
              p-10
            "
            >

              <h2 className="text-3xl font-bold">

                Order #{order.id}

              </h2>

              <p className="mt-4 text-gray-500">

                User ID : {order.userId}

              </p>

              <div
                className="
                mt-6
                flex
                items-center
                gap-2
                text-2xl
                font-bold
              "
              >

                <BadgeIndianRupee />

                {order.totalAmount}

              </div>

              <p className="mt-6">

                {order.status}

              </p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default AdminOrders;
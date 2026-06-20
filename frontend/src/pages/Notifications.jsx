import {
  Bell,
  CheckCircle,
  Truck,
  CreditCard,
  Package,
  CircleAlert,
} from "lucide-react";

function Notifications() {

  const notifications = [

    {
      id: 1,
      title: "Payment Successful",
      message: "Payment received for Order #1001.",
      icon: CreditCard,
      color: "text-green-500",
    },

    {
      id: 2,
      title: "Order Shipped",
      message: "Your order is on the way.",
      icon: Truck,
      color: "text-yellow-500",
    },

    {
      id: 3,
      title: "Order Delivered",
      message: "Order #1001 delivered successfully.",
      icon: CheckCircle,
      color: "text-blue-500",
    },

    {
      id: 4,
      title: "New Product Added",
      message: "iPhone 17 Pro is now available.",
      icon: Package,
      color: "text-purple-500",
    },

    {
      id: 5,
      title: "Low Stock Warning",
      message: "Apple Watch Ultra stock is low.",
      icon: CircleAlert,
      color: "text-red-500",
    },

  ];

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Notifications

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Latest updates from ShopFlow.

        </p>

      </div>

      {/* COUNT */}

      <div
        className="
        rounded-full
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        px-8
        py-4
        inline-block
      "
      >

        Total Notifications : {notifications.length}

      </div>

      {/* LIST */}

      <div className="space-y-8">

        {

          notifications.map(

            (notification) => {

              const Icon = notification.icon;

              return (

                <div
                  key={notification.id}
                  className="
                  rounded-[40px]
                  border border-white/20
                  bg-white/15
                  backdrop-blur-2xl
                  shadow-xl
                  p-8
                  hover:scale-[1.01]
                  duration-300
                "
                >

                  <div className="flex gap-6">

                    <div
                      className="
                      h-20
                      w-20
                      rounded-full
                      bg-white
                      flex
                      justify-center
                      items-center
                    "
                    >

                      <Icon
                        size={36}
                        className={notification.color}
                      />

                    </div>

                    <div>

                      <h1 className="text-3xl font-bold">

                        {notification.title}

                      </h1>

                      <p
                        className="
                        mt-4
                        text-gray-500
                        text-lg
                        leading-8
                      "
                      >

                        {notification.message}

                      </p>

                    </div>

                  </div>

                </div>

              );

            }

          )

        }

      </div>

      {

        notifications.length === 0 && (

          <div
            className="
            rounded-[50px]
            border border-white/20
            bg-white/15
            backdrop-blur-2xl
            shadow-xl
            p-20
            text-center
          "
          >

            <Bell
              size={90}
              className="
              mx-auto
              text-blue-500
            "
            />

            <h1
              className="
              text-5xl
              font-bold
              mt-10
            "
            >

              No Notifications

            </h1>

          </div>

        )

      }

    </div>

  );

}

export default Notifications;
import {
  Bell,
  ShoppingCart,
  UserPlus,
  Package,
  TriangleAlert,
  CheckCircle2,
} from "lucide-react";

function AdminNotifications() {

  const notifications = [

    {
      id: 1,
      title: "New Order Received",
      description: "Order #1008 has been placed.",
      time: "2 min ago",
      icon: <ShoppingCart className="text-blue-500" />,
      status: "New",
    },

    {
      id: 2,
      title: "New User Registered",
      description: "Rahul Sharma created an account.",
      time: "10 min ago",
      icon: <UserPlus className="text-green-500" />,
      status: "Success",
    },

    {
      id: 3,
      title: "Low Stock Alert",
      description: "iPhone 17 Pro stock is running low.",
      time: "25 min ago",
      icon: <TriangleAlert className="text-red-500" />,
      status: "Warning",
    },

    {
      id: 4,
      title: "Product Added",
      description: "MacBook M5 added successfully.",
      time: "1 hour ago",
      icon: <Package className="text-purple-500" />,
      status: "Success",
    },

    {
      id: 5,
      title: "Payment Completed",
      description: "Order #1005 payment confirmed.",
      time: "2 hours ago",
      icon: <CheckCircle2 className="text-emerald-500" />,
      status: "Completed",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Admin Notifications

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Monitor important activities across ShopFlow.

        </p>

      </div>

      {/* SUMMARY */}

      <div className="grid md:grid-cols-3 gap-8">

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

          <Bell
            size={45}
            className="mx-auto text-blue-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            28

          </h1>

          <h2 className="mt-4 text-xl">

            Total Notifications

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

          <TriangleAlert
            size={45}
            className="mx-auto text-red-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            3

          </h1>

          <h2 className="mt-4 text-xl">

            Warnings

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

          <CheckCircle2
            size={45}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            19

          </h1>

          <h2 className="mt-4 text-xl">

            Completed Events

          </h2>

        </div>

      </div>

      {/* NOTIFICATIONS */}

      <div className="space-y-8">

        {

          notifications.map(

            (notification) => (

              <div
                key={notification.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-xl
                p-8
                flex
                justify-between
                items-center
                gap-8
              "
              >

                <div className="flex gap-6 items-center">

                  <div
                    className="
                    h-16
                    w-16
                    rounded-full
                    bg-white/40
                    flex
                    items-center
                    justify-center
                  "
                  >

                    {notification.icon}

                  </div>

                  <div>

                    <h1 className="text-2xl font-bold">

                      {notification.title}

                    </h1>

                    <p className="text-gray-500 mt-3">

                      {notification.description}

                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <div
                    className="
                    px-5
                    py-2
                    rounded-full
                    bg-white/40
                    inline-block
                  "
                  >

                    {notification.status}

                  </div>

                  <p className="text-gray-500 mt-4">

                    {notification.time}

                  </p>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default AdminNotifications;
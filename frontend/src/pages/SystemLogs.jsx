import {
  Shield,
  Database,
  User,
  ShoppingCart,
  Bell,
  TriangleAlert,
  CheckCircle,
  Clock3,
} from "lucide-react";

function SystemLogs() {

  const logs = [

    {
      id: 1,
      type: "LOGIN",
      message: "Admin logged into dashboard",
      time: "2 minutes ago",
      icon: <User className="text-blue-500" />,
    },

    {
      id: 2,
      type: "ORDER",
      message: "New order #1001 created",
      time: "10 minutes ago",
      icon: <ShoppingCart className="text-green-500" />,
    },

    {
      id: 3,
      type: "DATABASE",
      message: "Database backup completed successfully",
      time: "30 minutes ago",
      icon: <Database className="text-purple-500" />,
    },

    {
      id: 4,
      type: "SECURITY",
      message: "JWT token validation executed",
      time: "1 hour ago",
      icon: <Shield className="text-cyan-500" />,
    },

    {
      id: 5,
      type: "WARNING",
      message: "Product stock is running low",
      time: "2 hours ago",
      icon: <TriangleAlert className="text-red-500" />,
    },

    {
      id: 6,
      type: "NOTIFICATION",
      message: "Kafka notification event published",
      time: "3 hours ago",
      icon: <Bell className="text-orange-500" />,
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          System Logs

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Monitor all activities across ShopFlow.

        </p>

      </div>

      {/* STATS */}

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

          <CheckCircle
            className="mx-auto text-green-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            152

          </h1>

          <h2 className="mt-4 text-xl">

            Successful Events

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

          <TriangleAlert
            className="mx-auto text-red-500"
            size={45}
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
          p-10
          shadow-xl
          text-center
        "
        >

          <Bell
            className="mx-auto text-orange-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            28

          </h1>

          <h2 className="mt-4 text-xl">

            Notifications

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

          <Clock3
            className="mx-auto text-blue-500"
            size={45}
          />

          <h1 className="text-5xl font-bold mt-8">

            24×7

          </h1>

          <h2 className="mt-4 text-xl">

            Monitoring

          </h2>

        </div>

      </div>

      {/* LOGS */}

      <div className="space-y-8">

        {

          logs.map(

            (log) => (

              <div
                key={log.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-xl
                p-8
                flex
                items-center
                justify-between
                gap-8
              "
              >

                <div className="flex items-center gap-6">

                  <div
                    className="
                    h-16
                    w-16
                    rounded-full
                    bg-white/40
                    flex
                    justify-center
                    items-center
                  "
                  >

                    {log.icon}

                  </div>

                  <div>

                    <h1 className="text-2xl font-bold">

                      {log.type}

                    </h1>

                    <p className="text-gray-500 mt-3">

                      {log.message}

                    </p>

                  </div>

                </div>

                <div
                  className="
                  px-6
                  py-3
                  rounded-full
                  bg-white/40
                "
                >

                  {log.time}

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default SystemLogs;
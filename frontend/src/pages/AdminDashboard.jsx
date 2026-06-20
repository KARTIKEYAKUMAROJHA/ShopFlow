import {
  Package,
  Users,
  ShoppingCart,
  IndianRupee,
  AlertTriangle,
  PlusCircle,
  Bell,
  TrendingUp,
  Boxes,
  // Star,
  Eye,
} from "lucide-react";

function AdminDashboard() {

  const recentOrders = [
    {
      id: 1001,
      customer: "Kartik Ojha",
      total: "₹149999",
      status: "Delivered",
    },
    {
      id: 1002,
      customer: "Rahul Sharma",
      total: "₹89999",
      status: "Shipping",
    },
    {
      id: 1003,
      customer: "Aman Singh",
      total: "₹239999",
      status: "Pending",
    },
  ];

  const lowStockProducts = [
    {
      name: "iPhone 17 Pro",
      stock: 2,
    },
    {
      name: "MacBook M5",
      stock: 1,
    },
    {
      name: "Apple Watch Ultra",
      stock: 0,
    },
  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl lg:text-7xl font-bold">

            Admin Dashboard

          </h1>

          <p className="text-xl text-gray-500 mt-5">

            Manage products, users and orders.

          </p>

        </div>

        <button
          className="
          h-fit
          px-8
          py-5
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          shadow-xl
          flex
          items-center
          gap-3
        "
        >

          <PlusCircle />

          Add Product

        </button>

      </div>

      {/* CARDS */}

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
        "
        >

          <IndianRupee
            size={45}
            className="text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            ₹8.5L

          </h1>

          <p className="mt-5 text-gray-500">

            Revenue

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
        "
        >

          <ShoppingCart
            size={45}
            className="text-blue-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            126

          </h1>

          <p className="mt-5 text-gray-500">

            Orders

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
        "
        >

          <Users
            size={45}
            className="text-purple-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            42

          </h1>

          <p className="mt-5 text-gray-500">

            Users

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
        "
        >

          <Package
            size={45}
            className="text-orange-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            58

          </h1>

          <p className="mt-5 text-gray-500">

            Products

          </p>

        </div>

      </div>

      {/* ANALYTICS */}

      <div className="grid lg:grid-cols-2 gap-10">

        <div
          className="
          rounded-[50px]
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-2xl
          p-12
        "
        >

          <div className="flex items-center gap-4">

            <TrendingUp
              className="text-green-500"
            />

            <h1 className="text-4xl font-bold">

              Sales Analytics

            </h1>

          </div>

          <div className="mt-12 space-y-8">

            <div>

              <div className="flex justify-between mb-3">

                <span>Orders</span>

                <span>85%</span>

              </div>

              <div className="h-4 rounded-full bg-gray-200">

                <div className="h-4 w-[85%] rounded-full bg-blue-500" />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-3">

                <span>Revenue</span>

                <span>70%</span>

              </div>

              <div className="h-4 rounded-full bg-gray-200">

                <div className="h-4 w-[70%] rounded-full bg-green-500" />

              </div>

            </div>

          </div>

        </div>

        <div
          className="
          rounded-[50px]
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-2xl
          p-12
        "
        >

          <div className="flex items-center gap-4">

            <Bell className="text-yellow-500" />

            <h1 className="text-4xl font-bold">

              Notifications

            </h1>

          </div>

          <div className="space-y-6 mt-10">

            <div className="rounded-3xl bg-white/40 p-6">

              New Order Received

            </div>

            <div className="rounded-3xl bg-white/40 p-6">

              Payment Success Event (Kafka)

            </div>

            <div className="rounded-3xl bg-white/40 p-6">

              User Registration Event

            </div>

          </div>

        </div>

      </div>

      {/* RECENT ORDERS */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-12
      "
      >

        <h1 className="text-4xl font-bold">

          Recent Orders

        </h1>

        <div className="space-y-6 mt-10">

          {

            recentOrders.map(

              order => (

                <div
                  key={order.id}
                  className="
                  rounded-3xl
                  bg-white/40
                  p-7
                  flex
                  justify-between
                  items-center
                "
                >

                  <div>

                    <h2 className="text-2xl font-bold">

                      #{order.id}

                    </h2>

                    <p className="text-gray-500">

                      {order.customer}

                    </p>

                  </div>

                  <div>

                    {order.total}

                  </div>

                  <div>

                    {order.status}

                  </div>

                  <button
                    className="
                    h-14
                    w-14
                    rounded-full
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                  >

                    <Eye />

                  </button>

                </div>

              )

            )

          }

        </div>

      </div>

      {/* LOW STOCK */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          <AlertTriangle
            className="text-red-500"
          />

          <h1 className="text-4xl font-bold">

            Low Stock Products

          </h1>

        </div>

        <div className="space-y-6 mt-10">

          {

            lowStockProducts.map(

              product => (

                <div
                  key={product.name}
                  className="
                  rounded-3xl
                  bg-white/40
                  p-7
                  flex
                  justify-between
                  items-center
                "
                >

                  <div>

                    <h2 className="text-2xl font-bold">

                      {product.name}

                    </h2>

                  </div>

                  {

                    product.stock === 0 ?

                      <div className="text-red-500 font-bold">

                        OUT OF STOCK

                      </div>

                      :

                      <div className="text-yellow-500 font-bold">

                        {product.stock} Left

                      </div>

                  }

                </div>

              )

            )

          }

        </div>

      </div>

      {/* FUTURE */}

      <div
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

        <div className="flex items-center gap-5">

          <Boxes size={55} />

          <div>

            <h1 className="text-5xl font-bold">

              ShopFlow Enterprise Panel

            </h1>

            <p className="text-xl mt-5">

              Ready for Product Service, Order Service,
              Kafka Events, Inventory Management,
              Coupons, Reviews and Analytics.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;
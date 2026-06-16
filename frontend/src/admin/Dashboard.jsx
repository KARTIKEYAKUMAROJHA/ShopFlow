function Dashboard() {
  return (
    <div className="space-y-10">

      <h1 className="text-5xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-xl
          p-8
        "
        >
          <h2 className="text-gray-500 text-xl">
            Total Sales
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            ₹125,480
          </h1>
        </div>

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-xl
          p-8
        "
        >
          <h2 className="text-gray-500 text-xl">
            Active Orders
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            88
          </h1>
        </div>

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-xl
          p-8
        "
        >
          <h2 className="text-gray-500 text-xl">
            Products
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            124
          </h1>
        </div>

      </div>

      <div
        className="
        rounded-3xl
        border border-white/20
        bg-white/15
        backdrop-blur-xl
        shadow-xl
        p-8
      "
      >

        <h2 className="text-3xl font-bold mb-8">
          Top Sellers
        </h2>

        <table className="w-full">

          <thead>

          <tr className="text-left">

            <th>Name</th>
            <th>Orders</th>
            <th>Revenue</th>

          </tr>

          </thead>

          <tbody>

          <tr className="h-16">

            <td>James Martin</td>
            <td>136</td>
            <td>₹34500</td>

          </tr>

          <tr className="h-16">

            <td>Kanther Hiam</td>
            <td>128</td>
            <td>₹24900</td>

          </tr>

          <tr className="h-16">

            <td>Roly Salliman</td>
            <td>115</td>
            <td>₹24000</td>

          </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;
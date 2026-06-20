import {
  Shield,
  User,
  Crown,
  Search,
  Ban,
  CheckCircle,
} from "lucide-react";

function UserRoles() {

  const users = [

    {
      id: 1,
      name: "Kartik Ojha",
      email: "kartik@gmail.com",
      role: "ADMIN",
      status: "Active",
      image: "https://i.pravatar.cc/300?img=1",
    },

    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "USER",
      status: "Active",
      image: "https://i.pravatar.cc/300?img=2",
    },

    {
      id: 3,
      name: "Aman Kumar",
      email: "aman@gmail.com",
      role: "USER",
      status: "Blocked",
      image: "https://i.pravatar.cc/300?img=3",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-bold">

            User Roles

          </h1>

          <p className="mt-5 text-xl text-gray-500">

            Manage user permissions and account status.

          </p>

        </div>

        <div
          className="
          rounded-full
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          px-8
          py-4
          shadow-xl
        "
        >

          Total Users : {users.length}

        </div>

      </div>

      {/* SEARCH */}

      <div
        className="
        rounded-[40px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-6
        flex
        items-center
        gap-4
      "
      >

        <Search className="text-blue-500" />

        <input
          type="text"
          placeholder="Search user..."
          className="
          bg-transparent
          outline-none
          w-full
          text-xl
        "
        />

      </div>

      {/* USERS */}

      <div className="grid lg:grid-cols-2 gap-10">

        {

          users.map(

            (user) => (

              <div
                key={user.id}
                className="
                rounded-[50px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-xl
                p-10
              "
              >

                <div className="flex gap-8 items-center">

                  <img
                    src={user.image}
                    alt=""
                    className="
                    h-32
                    w-32
                    rounded-full
                    object-cover
                  "
                  />

                  <div>

                    <h1 className="text-3xl font-bold">

                      {user.name}

                    </h1>

                    <p className="text-gray-500 mt-3">

                      {user.email}

                    </p>

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                  <div
                    className="
                    rounded-3xl
                    bg-white/40
                    p-6
                  "
                  >

                    <div className="flex items-center gap-3">

                      {

                        user.role === "ADMIN"

                          ?

                          <Crown className="text-yellow-500" />

                          :

                          <User className="text-blue-500" />

                      }

                      <h2 className="font-bold">

                        {user.role}

                      </h2>

                    </div>

                  </div>

                  <div
                    className="
                    rounded-3xl
                    bg-white/40
                    p-6
                  "
                  >

                    <div className="flex items-center gap-3">

                      {

                        user.status === "Active"

                          ?

                          <CheckCircle className="text-green-500" />

                          :

                          <Ban className="text-red-500" />

                      }

                      <h2 className="font-bold">

                        {user.status}

                      </h2>

                    </div>

                  </div>

                </div>

                <div className="flex gap-5 mt-10">

                  <button
                    className="
                    flex-1
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    text-white
                    py-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                  >

                    <Shield size={18} />

                    Change Role

                  </button>

                  <button
                    className="
                    flex-1
                    bg-red-500
                    text-white
                    py-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                  >

                    <Ban size={18} />

                    Block User

                  </button>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default UserRoles;
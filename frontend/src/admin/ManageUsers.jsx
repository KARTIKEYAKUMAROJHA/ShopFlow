import {
  User,
  Mail,
  Shield,
  Phone,
  MapPin,
} from "lucide-react";

function ManageUsers() {

  const users = [

    {
      id: 1,
      name: "Kartik Ojha",
      email: "kartik@gmail.com",
      role: "ADMIN",
      phone: "+91 9876543210",
      address: "New Delhi",
      image: "https://i.pravatar.cc/300?img=1",
    },

    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "USER",
      phone: "+91 9876543222",
      address: "Mumbai",
      image: "https://i.pravatar.cc/300?img=2",
    },

    {
      id: 3,
      name: "Aman Kumar",
      email: "aman@gmail.com",
      role: "USER",
      phone: "+91 9876543333",
      address: "Bangalore",
      image: "https://i.pravatar.cc/300?img=3",
    },

  ];

  return (

    <div>

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">

          Manage Users

        </h1>

        <div
          className="
          rounded-full
          bg-white/15
          border border-white/20
          backdrop-blur-xl
          px-6
          py-3
          shadow-xl
        "
        >

          Total Users : {users.length}

        </div>

      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">

        {

          users.map((user) => (

            <div
              key={user.id}
              className="
              rounded-[40px]
              border border-white/20
              bg-white/15
              backdrop-blur-2xl
              shadow-xl
              p-8
            "
            >

              <img
                src={user.image}
                className="
                w-32
                h-32
                rounded-full
                mx-auto
                object-cover
              "
              />

              <div className="space-y-6 mt-10">

                <div className="flex items-center gap-4">

                  <User
                    className="text-blue-500"
                  />

                  <h2 className="text-xl">

                    {user.name}

                  </h2>

                </div>

                <div className="flex items-center gap-4">

                  <Mail
                    className="text-purple-500"
                  />

                  <h2>

                    {user.email}

                  </h2>

                </div>

                <div className="flex items-center gap-4">

                  <Phone
                    className="text-green-500"
                  />

                  <h2>

                    {user.phone}

                  </h2>

                </div>

                <div className="flex items-center gap-4">

                  <MapPin
                    className="text-red-500"
                  />

                  <h2>

                    {user.address}

                  </h2>

                </div>

                <div className="flex items-center gap-4">

                  <Shield
                    className="text-yellow-500"
                  />

                  <h2>

                    {user.role}

                  </h2>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default ManageUsers;
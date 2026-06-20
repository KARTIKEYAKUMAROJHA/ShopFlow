import {
  Users,
  Mail,
  Shield,
} from "lucide-react";

function AdminUsers() {

  const users = [

    {
      id: 1,
      email: "admin@shopflow.com",
      role: "ADMIN",
    },

    {
      id: 2,
      email: "kartik@gmail.com",
      role: "USER",
    },

    {
      id: 3,
      email: "customer@gmail.com",
      role: "USER",
    },

  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div>

        <h1
          className="
          text-6xl
          font-bold
        "
        >

          Users

        </h1>

        <p
          className="
          text-xl
          text-gray-500
          mt-5
        "
        >

          Manage platform users.

        </p>

      </div>

      {/* TOTAL */}

      <div
        className="
        rounded-[40px]
        bg-white/20
        backdrop-blur-3xl
        border border-white/20
        p-10
        shadow-2xl
      "
      >

        <div
          className="
          flex
          items-center
          gap-4
        "
        >

          <Users
            className="
            text-blue-500
          "
          />

          <h2
            className="
            text-3xl
            font-bold
          "
          >

            Total Users :

            {" "}

            {

              users.length

            }

          </h2>

        </div>

      </div>

      {/* USERS */}

      <div
        className="
        grid
        gap-8
      "
      >

        {

          users.map(

            (user) => (

              <div

                key={
                  user.id
                }

                className="
                rounded-[40px]
                bg-white/20
                backdrop-blur-3xl
                border border-white/20
                shadow-2xl
                p-10
              "
              >

                <div
                  className="
                  flex
                  justify-between
                  flex-wrap
                  gap-8
                "
                >

                  <div>

                    <h2
                      className="
                      text-3xl
                      font-bold
                    "
                    >

                      User #

                      {

                        user.id

                      }

                    </h2>

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      mt-5
                      text-gray-500
                    "
                    >

                      <Mail />

                      {

                        user.email

                      }

                    </div>

                  </div>

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    text-xl
                    font-bold
                    text-cyan-500
                  "
                  >

                    <Shield />

                    {

                      user.role

                    }

                  </div>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default AdminUsers;
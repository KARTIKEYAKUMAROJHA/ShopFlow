import {
  User,
  Mail,
  Shield,
} from "lucide-react";

function ManageUsers() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Manage Users
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div
          className="
          rounded-3xl
          border border-white/20
          bg-white/15
          backdrop-blur-xl
          shadow-lg
          p-8
        "
        >

          <img
            src="https://i.pravatar.cc/300?img=1"
            className="
            w-28
            h-28
            rounded-full
            mx-auto
            object-cover
          "
          />

          <div className="mt-6 space-y-4">

            <div className="flex gap-4">

              <User className="text-blue-500" />

              <h2>Kartik</h2>

            </div>

            <div className="flex gap-4">

              <Mail className="text-blue-500" />

              <h2>kartik@gmail.com</h2>

            </div>

            <div className="flex gap-4">

              <Shield className="text-green-500" />

              <h2>USER</h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageUsers;
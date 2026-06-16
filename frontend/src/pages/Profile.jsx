import {
  User,
  Mail,
  Shield,
} from "lucide-react";

function Profile() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Profile
      </h1>

      <div
        className="
        max-w-2xl
        rounded-3xl
        border border-white/20
        bg-white/15
        backdrop-blur-xl
        shadow-lg
        p-10
      "
      >

        <div className="flex justify-center mb-10">

          <img
            src="https://i.pravatar.cc/300"
            className="
            w-36
            h-36
            rounded-full
            object-cover
          "
          />

        </div>

        <div className="space-y-8">

          <div className="flex gap-4">

            <User className="text-blue-500" />

            <h2 className="text-2xl">
              Kartik
            </h2>

          </div>

          <div className="flex gap-4">

            <Mail className="text-blue-500" />

            <h2 className="text-2xl">
              kartik@gmail.com
            </h2>

          </div>

          <div className="flex gap-4">

            <Shield className="text-blue-500" />

            <h2 className="text-2xl">
              USER
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
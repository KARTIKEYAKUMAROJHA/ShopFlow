import { useState } from "react";
import {
  User,
  Bell,
  Moon,
  Shield,
  Globe,
  Lock,
  Save,
} from "lucide-react";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Settings

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Manage your account preferences.

        </p>

      </div>

      {/* PROFILE */}

      <div
        className="
        rounded-[45px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-10
      "
      >

        <div className="flex items-center gap-4 mb-10">

          <User className="text-blue-500" />

          <h2 className="text-3xl font-bold">

            Profile Settings

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <input
            type="text"
            placeholder="Full Name"
            className="
            p-5
            rounded-3xl
            bg-white
            outline-none
          "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
            p-5
            rounded-3xl
            bg-white
            outline-none
          "
          />

        </div>

      </div>

      {/* PREFERENCES */}

      <div
        className="
        rounded-[45px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-10
      "
      >

        <div className="flex items-center gap-4 mb-10">

          <Bell className="text-yellow-500" />

          <h2 className="text-3xl font-bold">

            Preferences

          </h2>

        </div>

        <div className="space-y-8">

          <div className="flex justify-between items-center">

            <div className="flex gap-4 items-center">

              <Bell className="text-blue-500" />

              <h2 className="text-xl">

                Notifications

              </h2>

            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(
                  !notifications
                )
              }
            />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex gap-4 items-center">

              <Moon className="text-purple-500" />

              <h2 className="text-xl">

                Dark Mode

              </h2>

            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() =>
                setDarkMode(
                  !darkMode
                )
              }
            />

          </div>

        </div>

      </div>

      {/* SECURITY */}

      <div
        className="
        rounded-[45px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-10
      "
      >

        <div className="flex items-center gap-4 mb-10">

          <Shield className="text-green-500" />

          <h2 className="text-3xl font-bold">

            Security

          </h2>

        </div>

        <div className="space-y-8">

          <div className="flex items-center gap-4">

            <Lock className="text-red-500" />

            <h2 className="text-xl">

              Change Password

            </h2>

          </div>

          <div className="flex items-center gap-4">

            <Globe className="text-blue-500" />

            <h2 className="text-xl">

              Language & Region

            </h2>

          </div>

        </div>

      </div>

      {/* SAVE */}

      <button
        className="
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        px-10
        py-5
        rounded-full
        text-xl
        shadow-xl
        flex
        items-center
        gap-3
        hover:scale-105
        duration-300
      "
      >

        <Save />

        Save Changes

      </button>

    </div>

  );

}

export default Settings;
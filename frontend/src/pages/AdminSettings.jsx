import { useState } from "react";
import {
  User,
  Lock,
  Bell,
  Shield,
  Moon,
  Sun,
  Save,
  Database,
  Mail,
} from "lucide-react";

function AdminSettings() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Admin Settings

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Manage system preferences and account settings.

        </p>

      </div>

      {/* ACCOUNT */}

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

          <User
            className="text-blue-500"
            size={35}
          />

          <h1 className="text-4xl font-bold">

            Account Settings

          </h1>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <input
            type="text"
            placeholder="Admin Name"
            className="
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

          <input
            type="email"
            placeholder="admin@shopflow.com"
            className="
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

      </div>

      {/* SECURITY */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          <Lock
            className="text-green-500"
            size={35}
          />

          <h1 className="text-4xl font-bold">

            Security

          </h1>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <input
            type="password"
            placeholder="New Password"
            className="
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

      </div>

      {/* NOTIFICATIONS */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          <Bell
            className="text-orange-500"
            size={35}
          />

          <h1 className="text-4xl font-bold">

            Notifications

          </h1>

        </div>

        <div className="space-y-8 mt-10">

          <div className="flex justify-between">

            <h2 className="text-xl">

              Email Notifications

            </h2>

            <Mail className="text-blue-500" />

          </div>

          <div className="flex justify-between">

            <h2 className="text-xl">

              System Alerts

            </h2>

            <Shield className="text-green-500" />

          </div>

        </div>

      </div>

      {/* APPEARANCE */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          {

            darkMode ?

            <Moon
              className="text-indigo-500"
              size={35}
            />

            :

            <Sun
              className="text-yellow-500"
              size={35}
            />

          }

          <h1 className="text-4xl font-bold">

            Appearance

          </h1>

        </div>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="
          mt-10
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          px-8
          py-4
          rounded-full
          hover:scale-105
          duration-300
        "
        >

          {

            darkMode ?

            "Switch To Light Mode"

            :

            "Switch To Dark Mode"

          }

        </button>

      </div>

      {/* DATABASE */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-12
      "
      >

        <div className="flex items-center gap-4">

          <Database
            className="text-purple-500"
            size={35}
          />

          <h1 className="text-4xl font-bold">

            System Information

          </h1>

        </div>

        <div className="space-y-6 mt-10">

          <div className="flex justify-between">

            <h2>

              Version

            </h2>

            <h2 className="font-bold">

              ShopFlow v1.0

            </h2>

          </div>

          <div className="flex justify-between">

            <h2>

              Backend

            </h2>

            <h2 className="font-bold">

              Spring Boot Microservices

            </h2>

          </div>

          <div className="flex justify-between">

            <h2>

              Event Broker

            </h2>

            <h2 className="font-bold">

              Apache Kafka

            </h2>

          </div>

        </div>

      </div>

      {/* SAVE */}

      <div className="flex justify-center">

        <button
          className="
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          px-12
          py-5
          rounded-full
          text-xl
          flex
          items-center
          gap-3
          shadow-xl
          hover:scale-105
          duration-300
        "
        >

          <Save />

          Save Changes

        </button>

      </div>

    </div>

  );

}

export default AdminSettings;
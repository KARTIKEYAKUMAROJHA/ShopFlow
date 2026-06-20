import { useContext, useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/axios";
import AuthContext from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/api/auth/login",
        formData
      );

      const responseData =
        response.data;

      localStorage.setItem(
        "token",
        responseData.token
      );

      localStorage.setItem(
        "role",
        responseData.role
      );

      localStorage.setItem(
        "userId",
        responseData.id
      );

      localStorage.setItem(
        "email",
        responseData.email
      );

      login({

        id:
          responseData.id,

        email:
          responseData.email,

        token:
          responseData.token,

        role:
          responseData.role,

      });

      alert(
        "Login Successful"
      );

      if (
        responseData.role ===
        "ADMIN"
      ) {

        navigate(
          "/admin/dashboard"
        );

      }

      else {

        navigate("/");

      }

    }

    catch (error) {

      console.log(error);

      alert(
        "Invalid Credentials"
      );

    }

  };

  return (
    <div
      className="
      min-h-[85vh]
      flex
      justify-center
      items-center
      px-5
    "
    >
      <div
        className="
        w-full
        max-w-6xl
        grid
        lg:grid-cols-2
        overflow-hidden
        rounded-[55px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
      "
      >
        {/* LEFT */}

        <div
          className="
          hidden
          lg:flex
          flex-col
          justify-center
          p-16
          bg-gradient-to-br
          from-blue-500
          via-cyan-400
          to-indigo-500
          text-white
        "
        >
          <h1
            className="
            text-6xl
            font-bold
            leading-tight
          "
          >
            Welcome
            Back
          </h1>

          <p
            className="
            mt-10
            text-xl
            leading-9
          "
          >
            Continue your premium shopping experience with ShopFlow.
          </p>

          <div
            className="
            mt-16
            flex
            items-center
            gap-4
          "
          >
            <ShieldCheck size={32} />

            <h2 className="text-2xl">
              Secure JWT Authentication
            </h2>
          </div>
        </div>

        {/* RIGHT */}

        <div className="p-10 lg:p-16">
          <div className="text-center">
            <h1
              className="
              text-5xl
              font-bold
            "
            >
              Sign In
            </h1>

            <p
              className="
              mt-5
              text-gray-500
            "
            >
              Access your ShopFlow account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="
            mt-14
            space-y-8
          "
          >
            {/* Email */}

            <div>
              <div
                className="
                flex
                items-center
                gap-3
                mb-4
              "
              >
                <Mail
                  className="
                  text-blue-500
                "
                />

                <h2 className="font-semibold">
                  Email Address
                </h2>
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="kartikey@gmail.com"
                className="
                w-full
                p-5
                rounded-[25px]
                bg-white/40
                backdrop-blur-xl
                outline-none
                border border-white/30
              "
                required
              />
            </div>

            {/* Password */}

            <div>
              <div
                className="
                flex
                items-center
                gap-3
                mb-4
              "
              >
                <Lock
                  className="
                  text-blue-500
                "
                />

                <h2 className="font-semibold">
                  Password
                </h2>
              </div>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="
                  w-full
                  p-5
                  rounded-[25px]
                  bg-white/40
                  border border-white/30
                  outline-none
                "
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                  absolute
                  right-6
                  top-1/2
                  -translate-y-1/2
                "
                >
                  {
                    showPassword
                      ? <EyeOff />
                      : <Eye />
                  }
                </button>
              </div>
            </div>

            {/* Forgot */}

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="
                text-blue-500
                font-medium
              "
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}

            <button
              className="
              w-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              text-white
              rounded-full
              py-5
              text-xl
              font-semibold
              shadow-2xl
              flex
              justify-center
              items-center
              gap-3
              hover:scale-[1.02]
              duration-300
            "
            >
              Login
              <ArrowRight />
            </button>
          </form>

          {/* Register */}

          <div
            className="
            text-center
            mt-10
          "
          >
            <p className="text-gray-500">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="
              text-blue-500
              font-bold
              text-lg
            "
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
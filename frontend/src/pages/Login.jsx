import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import AuthContext from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/api/auth/login",
        formData
      );

      const token = response.data;

      localStorage.setItem(
        "token",
        token
      );

      login({
        email: formData.email,
      });

      alert("Login Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (
    <div
      className="
      max-w-md
      mx-auto
      mt-20
      rounded-3xl
      border border-white/20
      bg-white/15
      backdrop-blur-xl
      shadow-lg
      p-8
    "
    >

      <h1 className="text-4xl font-bold mb-8">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-2xl
          mb-5
          bg-white
        "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-2xl
          mb-5
          bg-white
        "
        />

        <button
          className="
          w-full
          bg-blue-500
          text-white
          p-4
          rounded-full
          hover:scale-105
          duration-300
        "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
import { useState } from "react";
import api from "../api/axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {

    try {

      const request = {
        name,
        email,
        password,
      };

      const response = await api.post(
        "/api/auth/register",
        request
      );

      alert(response.data);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  }

  return (
    <div
      className="
      max-w-md
      mx-auto
      mt-20
      rounded-3xl
      border
      border-white/20
      bg-white/15
      backdrop-blur-xl
      shadow-lg
      p-8
    "
    >

      <h1 className="text-4xl font-bold mb-8">
        Register
      </h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 rounded-2xl mb-5 bg-white"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 rounded-2xl mb-5 bg-white"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-4 rounded-2xl mb-5 bg-white"
      />

      <button
        onClick={handleRegister}
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
        Register
      </button>

    </div>
  );
}

export default Register;
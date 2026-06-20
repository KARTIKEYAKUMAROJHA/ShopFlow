import { useState } from "react";
import AuthContext from "./AuthContext";
import toast from "react-hot-toast";

function AuthContextProvider({ children }) {

  const [user, setUser] = useState(() => {

    const id = localStorage.getItem(
      "userId"
    );

    const email = localStorage.getItem(
      "email"
    );

    if (!email) {

      return null;

    }

    return {

      id: Number(id),

      email,

    };

  });

  const [role, setRole] = useState(() => {

    return localStorage.getItem(
      "role"
    );

  });

  const [token, setToken] = useState(() => {

    return localStorage.getItem(
      "token"
    );

  });

  const isAuthenticated = !!token;

  function login(data) {

      toast.success(
    "Login Successful"
  );

    const currentUser = {

      id: data.id,

      email: data.email,

    };

    setUser(
      currentUser
    );

    setRole(
      data.role
    );

    setToken(
      data.token
    );

    localStorage.setItem(
      "userId",
      data.id
    );

    localStorage.setItem(
      "email",
      data.email
    );

    localStorage.setItem(
      "role",
      data.role
    );

    localStorage.setItem(
      "token",
      data.token
    );

  }

  function logout() {

      toast.success(
    "Logged Out Successfully"
  );

    localStorage.removeItem(
      "userId"
    );

    localStorage.removeItem(
      "email"
    );

    localStorage.removeItem(
      "role"
    );

    localStorage.removeItem(
      "token"
    );

    setUser(null);

    setRole(null);

    setToken(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        role,
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthContextProvider;
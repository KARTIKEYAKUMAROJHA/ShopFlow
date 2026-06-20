import { createContext } from "react";

const AuthContext = createContext({

  user: null,

  token: null,

  role: null,

  isAuthenticated: false,

  login: () => {},

  logout: () => {},

});

export default AuthContext;
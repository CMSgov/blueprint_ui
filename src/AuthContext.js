import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestService from "./services/RequestService";
import { config } from "./config";
import { MAIN_ROUTES } from "./AppRoutes";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    RequestService.post(
      config.backendUrlAuth,
      JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      (response) => {
        setUser(response.data.user);
        sessionStorage.setItem("Token", response.data.token);
        sessionStorage.setItem("Username", response.data.user.username);
        navigate(MAIN_ROUTES.HOME);
      }
    );
  };

  let logoutUser = async () => {
    setUser(null);
    sessionStorage.clear();
    navigate(MAIN_ROUTES.LOGIN);
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

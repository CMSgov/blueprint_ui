import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestService from "./services/RequestService";
import { config } from "./config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authToken, setAuthToken] = useState(null);
  let [user, setUser] = useState(null);
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", e);
    RequestService.loginPost(
      config.backendUrlAuth,
      JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      (response) => {
        console.log("Response", response);
        setAuthToken(response.data.token);
        setUser(true); // TODO save user data
        navigate("/");
      } // TODO Handle error response
    );
  };

  let contextData = {
    authToken,
    authToken,
    user: user,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

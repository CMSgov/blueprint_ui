// This component acts as a wrapper around components for routing purposes.
// Checks to see if the user is authenticated
// then renders the intended component or redirects to login.

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../AuthContext";

const Private = ({ Component }) => {
  let { user } = useContext(AuthContext); // authstore.isloggedin()

  return user ? <Component /> : <Navigate to="/login" />;
};

export default Private;

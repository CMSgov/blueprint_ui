// This component acts as a wrapper around components for routing purposes.
// Checks to see if the user is authenticated
// then renders the intended component or redirects to login.

import { Navigate } from "react-router-dom";

const Private = ({ Component }) => {
  const isAuthorized = sessionStorage.getItem("Token");

  return isAuthorized ? <Component /> : <Navigate to="/login" />;
};

export default Private;

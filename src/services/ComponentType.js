// These ComponentTypes acts as a wrapper around components for routing purposes.

import { Navigate } from "react-router-dom";

const isAuthorized = sessionStorage.getItem("Token");

// Use for: pages that should only be accessible when a user is logged in
// If the user is authenticated
// then renders the intended component or redirects to login.
export const Private = ({ Component }) => {
  return isAuthorized ? <Component /> : <Navigate to="/login" />;
};

// Use for: authentication pages (login page, create account page)
// If the user is already logged in, navigate them to the homepage
// else, render the intended component.
export const Authentication = ({ Component }) => {
  return isAuthorized ? <Navigate to="/" /> : <Component />;
};

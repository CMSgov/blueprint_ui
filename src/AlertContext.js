import React from "react";
import { useState } from "react";

const AlertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const [type, setType] = useState(); // options: "success", "warning", "error", "info"
  const [message, setMessage] = useState();

  return (
    <AlertContext.Provider
      value={{ type: [type, setType], message: [message, setMessage] }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

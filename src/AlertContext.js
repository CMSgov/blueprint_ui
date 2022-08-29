import React from "react";
import { useState } from "react";

const AlertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const [alertType, setAlertType] = useState(); // options: "success", "warning", "error", "info"
  const [alertMessage, setAlertMessage] = useState();

  return (
    <AlertContext.Provider
      value={{ alertType, setAlertType, alertMessage, setAlertMessage }}
      // value={{ type: [type, setType], message: [message, setMessage] }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

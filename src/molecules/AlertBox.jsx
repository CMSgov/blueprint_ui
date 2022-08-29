import { useContext } from "react";
import { Alert, Button } from "@trussworks/react-uswds";
import AlertContext from "../AlertContext";

const AlertBox = () => {
  // alertType options: "success", "warning", "error", "info"
  // Default is "info"
  const { alertType, alertMessage, setAlertMessage, setAlertType } =
    useContext(AlertContext);

  const clearAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  if (alertMessage) {
    return (
      <div className="alert-container">
        <Alert className="alert-override" type={alertType} slim>
          {alertMessage}
          <span />
          <span className="close-alert">
            <Button unstyled onClick={() => clearAlert()}>
              Close alert
              <img src="/closeIcon.svg" alt="close icon" />
            </Button>
          </span>
        </Alert>
      </div>
    );
  }
};

export default AlertBox;

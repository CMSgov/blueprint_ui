import { useContext } from "react";
import { Alert, Button } from "@trussworks/react-uswds";
import GlobalState from "../GlobalState";

const AlertBox = () => {
  const [state, setState] = useContext(GlobalState);

  const clearAlert = () => {
    setState((state) => ({ ...state, alert: null }));
  };

  if (state.alert) {
    return (
      <div className="alert-container">
        <Alert className="alert-override" type={state.alert.type} slim>
          {state.alert.message}
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

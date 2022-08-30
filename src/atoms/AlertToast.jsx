import { Alert } from "@trussworks/react-uswds";
import PropTypes from "prop-types";

const Container = (props) => <div>{props.children}</div>;

const AlertToast = (type, message) => (
  <Container>
    <Alert type={type} slim>
      {message}
    </Alert>
  </Container>
);

AlertToast.propTypes = {
  type: PropTypes.oneOf(["success", "warning", "error", "info"]), // Default is "info"
  message: PropTypes.string.isRequired,
};

export default AlertToast;

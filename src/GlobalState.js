import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const GlobalState = React.createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <GlobalState.Provider value={[state, setState]}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;

GlobalState.propTypes = {
  alert: PropTypes.shape({
    // type options are consistent with Alert component's type options, see:
    // https://github.com/trussworks/react-uswds/blob/fdeefc6d4e7e69fea50b6b0017dcc286979fbca5/src/components/Alert/Alert.tsx#L9
    type: PropTypes.oneOf(["success", "warning", "error", "info"]),
    message: PropTypes.string,
  }),
};

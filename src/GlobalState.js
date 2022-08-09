import React from "react";
import { useState } from "react";

const GlobalState = React.createContext();

export const GlobalStateProvider = ({ children, value }) => {
  const [state, setState] = useState({});

  if (value && value !== undefined) {
    setState((state) => ({ ...state, value }));
  }
  return (
    <GlobalState.Provider value={[state, setState]}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;

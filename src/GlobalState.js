import React from "react";
import { useState } from "react";

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

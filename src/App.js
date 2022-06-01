import "./App.scss";
import Footer from "./organisms/Footer";
import { Outlet } from "react-router-dom";
import Header from "./organisms/Header";
import { useState } from "react";
import Breadcrumbs from "./organisms/Breadcrumbs";
import GlobalState from "./GlobalState";

function App() {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <GlobalState.Provider value={[state, setState]}>
        <Header />
        <div className="grid-row grid-col-12 main-content-body">
          <Breadcrumbs />
          <Outlet />
        </div>
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}

export default App;

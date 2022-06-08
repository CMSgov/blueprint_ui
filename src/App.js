import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./organisms/Footer";
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
        <div className="grid-row main-content-body">
          <div className="grid-col-12">
            <Breadcrumbs />
            <Outlet />
          </div>
        </div>
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}

export default App;

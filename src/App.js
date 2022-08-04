import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import { useState } from "react";
import Breadcrumbs from "./organisms/Breadcrumbs";
import GlobalState from "./GlobalState";
import { AuthProvider } from "./AuthContext";

function App() {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <AuthProvider>
        <GlobalState.Provider value={[state, setState]}>
          <Header />
          <div className="grid-row">
            <div className="grid-col-12 main-content-body">
              <Breadcrumbs />
              <Outlet />
            </div>
          </div>
          <Footer />
        </GlobalState.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;

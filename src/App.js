import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import Breadcrumbs from "./organisms/Breadcrumbs";
import { GlobalStateProvider } from "./GlobalState";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Header />
        <div className="grid-row">
          <div className="grid-col-12 main-content-body">
            <Breadcrumbs />
            <Outlet />
          </div>
        </div>
        <Footer />
      </GlobalStateProvider>
      <ToastContainer autoClose={5000} transition={Bounce} hideProgressBar />
    </div>
  );
}

export default App;

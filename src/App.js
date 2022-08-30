import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import Breadcrumbs from "./organisms/Breadcrumbs";
import { GlobalStateProvider } from "./GlobalState";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={5000} transition={Slide} hideProgressBar />
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
    </div>
  );
}

export default App;

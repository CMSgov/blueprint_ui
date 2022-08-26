import { Outlet } from "react-router-dom";
import "./App.scss";
import AlertBox from "./molecules/AlertBox";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import Breadcrumbs from "./organisms/Breadcrumbs";
import { GlobalStateProvider } from "./GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Header />
        <div className="grid-row">
          <div className="grid-col-12 main-content-body">
            <AlertBox />
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

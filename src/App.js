import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-row main-content-body">
        <div className="grid-col-12">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

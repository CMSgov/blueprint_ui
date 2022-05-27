import { Outlet } from "react-router-dom";
import Header from "./organisms/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-row grid-col-12 main-content-body">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

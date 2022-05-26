import "./App.scss";
import { AppRoutes } from "./AppRoutes";
import { Link } from "react-router-dom";
import Footer from "./organisms/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |{" "}
        <Link to="/settings">Project Settings</Link>
      </nav>
      <button className="usa-button usa-button--big">Big USWDS Button</button>
      <div className="grid-row grid-col-12 main-content-body">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "./App.scss";
import { MAIN_ROUTES, AppRoutes } from "./AppRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to={MAIN_ROUTES.PROJECTS} >Projects</Link>
      </nav>
      <button className="usa-button usa-button--big">Big USWDS Button</button>
      <AppRoutes />
    </div>
  );
}

export default App;

import "./App.scss";
import { MAIN_ROUTES } from "./AppRoutes";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to={MAIN_ROUTES.PROJECTS} >Projects</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

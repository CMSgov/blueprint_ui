import "./App.scss";
import { AppRoutes } from "./AppRoutes";
import { Link } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/settings">Project Settings</Link>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;

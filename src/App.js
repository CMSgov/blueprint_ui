import "./App.scss";
import { AppRoutes } from "./AppRoutes";
import Header from "./organisms/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-row">
        <div className="grid-col-1"></div>
        <div className="grid-col-10">
          <AppRoutes />
        </div>
        <div className="grid-col-1"></div>
      </div>
    </div>
  );
}

export default App;

import "./App.scss";
import { AppRoutes } from "./AppRoutes";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-row grid-col-12 main-content-body">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

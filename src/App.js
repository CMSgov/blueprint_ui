import "./App.scss";
import { Project } from "./templates/Project";

function App() {
  const project = {"title":"Complex Amazing Technology","acronym":"CAT","creator":1,"impact_level":"moderate","location":"other","id":1};

  return (
    <div className="App">
      <header className="App-header">
        <button className="usa-button usa-button--big">Big USWDS Button</button>
        <Project project={project} />
      </header>
    </div>
  );
}

export default App;

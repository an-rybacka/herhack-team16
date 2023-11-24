import "./App.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./images/plastic-pet2.jpg"
          className="factory"
          alt="factory"
          height="400"
        />
        <p>hello you.</p>
        <Home />
        <Button label="Submit" />
      </header>
    </div>
  );
}

export default App;

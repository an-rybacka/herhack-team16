import "./App.css";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateProfile from "./pages/CreateProfile";

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
      </header>
      {/* <Header /> */}
      <main>
        <Home />
        <Welcome />
        <CreateProfile />
      </main>
      {/* <footer id="footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import AddOffer from "./pages/AddOffer";
import SearchPage from "./pages/SearchPage";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showSearchPage, setshowSearchPage] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleGetStartedClick = () => {
    setShowHome(false);
    setshowSearchPage(true);
  };

  const handleCreateProfileSubmit = () => {
    setshowSearchPage(false);
    setShowWelcome(true);
  };
  return (
    <div className="App">
      <main>
        <div>
          {showHome && <Home onGetStartedClick={handleGetStartedClick} />}
          {showSearchPage && (
            <SearchPage onSubmit={handleCreateProfileSubmit} />
          )}
          {showWelcome && <Welcome />}
          <AddOffer />
        </div>
      </main>
      {/* <footer id="footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

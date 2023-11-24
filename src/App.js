import React, { useState } from "react";
import "./App.css";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleGetStartedClick = () => {
    setShowHome(false);
    setShowCreateProfile(true);
  };

  const handleCreateProfileSubmit = () => {
    setShowCreateProfile(false);
    setShowWelcome(true);
  };
  return (
    <div className="App">
      <main>
        <div >
          {showHome && <Home onGetStartedClick={handleGetStartedClick} />}
          {showCreateProfile && (
            <CreateProfile onSubmit={handleCreateProfileSubmit} />
          )}
          {showWelcome && <Welcome />}
        </div>
      </main>
      {/* <footer id="footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

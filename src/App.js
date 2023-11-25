import React, { useState, useRef } from "react";
import "./App.css";

import Home from "./pages/Home";
import AddOffer from "./pages/AddOffer";
import SearchPage from "./pages/SearchPage";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showSearchPage, setshowSearchPage] = useState(false);
  const [showAddOffer, setshowAddOffer] = useState(false);
  const searchPageRef = useRef(null);

  const handleBrowse = () => {
    setshowSearchPage(true);
    // Scroll to the SearchPage component
    if (searchPageRef.current) {
      searchPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddOffer = () => {
    setShowHome(false);
    setshowSearchPage(false);
    setshowAddOffer(true);
  };
  return (
    <div className="App">
      <main>
        <div>
          {showHome && (
            <Home onAddOffer={handleAddOffer} onBrowse={handleBrowse} />
          )}
          {showSearchPage && <SearchPage />}
          {showAddOffer && <AddOffer />}
        </div>
      </main>
    </div>
  );
}

export default App;

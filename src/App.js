import React, { useState, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import AddOffer from "./pages/AddOffer";
import TakeOffer from "./pages/TakeOffer";
import SearchPage from "./pages/SearchPage";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showSearchPage, setshowSearchPage] = useState(false);
  const [showAddOffer, setshowAddOffer] = useState(false);
  const [showTakeOffer, setshowTakeOffer] = useState(false);

  const searchPageRef = useRef(null);

  const handleAddOffer = () => {
    setShowHome(false);
    setshowSearchPage(false);
    setshowAddOffer(true);
  };

  const handleTakeOffer = () => {
    setShowHome(false);
    setshowSearchPage(false);
    setshowTakeOffer(true);
  };

  const handleBrowse = async () => {
    setshowSearchPage(true);

    try {
      const response = await fetch(
        "https://oc7ax6ozx7o5r3ygnr4xupzm4e0mxmph.lambda-url.ap-northeast-2.on.aws/"
      );
      console.log(response.body);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleCancelOffer() {
    setShowHome(true);
    setshowSearchPage(false);
    setshowAddOffer(false);
    setshowTakeOffer(false);
  }

  return (
    <div className="App">
      <main>
        <div>
          {showHome && (
            <Home
              onAddOffer={handleAddOffer}
              onBrowse={handleBrowse}
              onTakeOffer={handleTakeOffer}
            />
          )}
          {showSearchPage && <SearchPage />}
          {showAddOffer && <AddOffer onCancelOffer={handleCancelOffer} />}
          {showTakeOffer && <TakeOffer onCancelOffer={handleCancelOffer} />}
        </div>
      </main>
    </div>
  );
}

export default App;

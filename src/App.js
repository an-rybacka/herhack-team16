import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import AddOffer from "./pages/AddOffer";
import SearchPage from "./pages/SearchPage";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showSearchPage, setshowSearchPage] = useState(false);
  const [showAddOffer, setshowAddOffer] = useState(false);
  const searchPageRef = useRef(null);

  useEffect(() => {
    // Scroll to the SearchPage component after it is mounted
    if (showSearchPage && searchPageRef.current) {
      searchPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showSearchPage]);

  const handleAddOffer = () => {
    setShowHome(false);
    setshowSearchPage(false);
    setshowAddOffer(true);
  };

  const handleBrowse = async () => {
    setshowSearchPage(true);

    try {
      const response = await fetch(
        "https://oc7ax6ozx7o5r3ygnr4xupzm4e0mxmph.lambda-url.ap-northeast-2.on.aws/"
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  function handleCancelOffer() {
    setShowHome(true);
    setshowSearchPage(false);
    setshowAddOffer(false);
  }

  return (
    <div className="App">
      <main>
        <div>
          {showHome && (
            <Home onAddOffer={handleAddOffer} onBrowse={handleBrowse} />
          )}
          {showSearchPage && <SearchPage />}
          {showAddOffer && <AddOffer onCancelOffer={handleCancelOffer} />}
        </div>
      </main>
    </div>
  );
}

export default App;

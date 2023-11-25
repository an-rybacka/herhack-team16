import { Button } from "primereact/button";

export default function Home({ onGetStartedClick, onAddOffer, onBrowse }) {
  return (
    <div>
      {/* <Header /> */}
      <header className="App-header">
        <img
          src="./images/plastic-pet2.jpg"
          className="header-image"
          alt="factory"
        />
      </header>
      <div className="home-container">
        <h2>Welcome to the Plastic Waste Marketplace</h2>
        <p>Buy and sell plastic waste with ease</p>
        {/* <Button
          rounded
          label="Let's get started"
          severity="primary"
          style={{ width: "200px" }}
          onClick={onGetStartedClick}
        /> */}
        <h3>What would you like to do today?</h3>
        <div className="space-y-4">
          <Button
            rounded
            label="Create an offer"
            severity="primary"
            style={{ padding: "20px 40px" }}
            className="m-4"
            onClick={onAddOffer}
          />
          <Button
            rounded
            label="Browse offers"
            severity="secondary"
            style={{ padding: "20px 40px" }}
            className="m-4"
            onClick={onBrowse}
          />
        </div>
      </div>
    </div>
  );
}

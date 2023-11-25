import { Button } from "primereact/button";

export default function Home({ onGetStartedClick }) {
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
        <Button
          rounded
          label="Let's get started"
          severity="primary"
          style={{ width: "200px" }} // Adjust the width as needed
          onClick={onGetStartedClick}
        />
      </div>
    </div>
  );
}

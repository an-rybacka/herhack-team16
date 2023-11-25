import { Button } from "primereact/button";
import Header from "../components/Header";

export default function Home({ onAddOffer, onBrowse, onTakeOffer }) {
  return (
    <div className="header-container">
      <Header />
      <div className="home-container">
        <div>
          <h2>Welcome to the Plastic Waste Marketplace</h2>
        </div>
        <div>
          {" "}
          <p>Buy and sell plastic waste with ease</p>
        </div>

        <div>
          <h3>What would you like to do today?</h3>
        </div>
        <div className="space-y-2">
          <Button
            rounded
            label="Create an offer" // I am a manufacturer that produces plastic waste. I want to connect with companies that recycle my waste so I can help the planet
            severity="primary"
            style={{ padding: "20px 40px" }}
            className="m-2"
            onClick={onAddOffer}
          />
          <Button
            rounded
            label="Take an offer" // I am recycling plastic materials. I want to make a request for materials and get matched with manufacturers.
            severity="secondary"
            style={{ padding: "20px 40px" }}
            className="m-2"
            onClick={onTakeOffer}
          />
          <Button
            rounded
            label="Browse available offers"
            severity="secondary"
            style={{ padding: "20px 40px" }}
            className="m-2"
            onClick={onBrowse}
          />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

import { Button } from "primereact/button";
import Header from "../components/Header";

export default function Home({ onAddOffer, onBrowse }) {
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
            label="Create an offer"
            severity="primary"
            style={{ padding: "20px 40px" }}
            className="m-2"
            onClick={onAddOffer}
          />
          <Button
            rounded
            label="Browse offers"
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

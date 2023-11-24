import { Button } from "primereact/button";
import Header from "../components/Header";

export default function Home({ onGetStartedClick }) {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h2>Welcome to the Plastic Waste Marketplace</h2>
        <p>Buy and sell plastic waste with ease</p>
        <Button
          rounded
          label="Let's get started"
          severity="primary"
          className="m-3"
          onClick={onGetStartedClick}
        />
      </div>
    </div>
  );
}

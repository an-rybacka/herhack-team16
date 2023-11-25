// SearchPage.js
import React from "react";
import { Button } from "primereact/button";
import "./SearchPage.css";

const offers = [
  // Sample data for demonstration
  {
    material_cat: "PET",
    product_cat: "Bottles",
    color: "Red",
    weight: 50,
    city: "Baden",
  },
  {
    material_cat: "HDPE",
    product_cat: "Containers",
    color: "Blue",
    weight: 30,
    city: "Brugg",
  },
  {
    material_cat: "PET",
    product_cat: "Bottles",
    color: "Transparent",
    weight: 50,
    city: "Zürich",
  },
  {
    material_cat: "HDPE",
    product_cat: "Containers",
    color: "Blue",
    weight: 30,
    city: "Aarau",
  },
];

const SearchPage = () => {
  return (
    <div className="search-page-container">
      <h2>What type of plastic are you interested in?</h2>
      <div className="plastic-buttons">
        <Button rounded label="PET" className="p-button-secondary" />
        <Button rounded label="HDPE" className="p-button-secondary" />
        <Button rounded label="PVC" className="p-button-secondary" />
        <Button rounded label="LDPE" className="p-button-secondary" />
        <Button rounded label="PP" className="p-button-secondary" />
        <Button rounded label="PS" className="p-button-secondary" />
        <Button rounded label="Other" className="p-button-secondary" />
      </div>

      <div className="offer-cards">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="picture-holder">
              
              {/* Placeholder for picture */}
            </div>
            <div className="offer-details">
              <div className="detail">Material: {offer.material_cat}</div>
              <div className="detail">Product: {offer.product_cat}</div>
              <div className="detail">Color: {offer.color}</div>
              <div className="detail">Weight: {offer.weight} kg</div>
              <div className="detail">City: {offer.city}</div>
              <Button
                rounded
                label="See details"
                className="p-button-primary"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

// SearchPage.js
import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import "./SearchPage.css";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

const offers = [
  // Sample data for demonstration
  {
    company_name: "Prodex Technologie AG",
    email: "prodextechnologie@example.com",
    material_cat: "PVC",
    product_cat: "Bags",
    color: "brown",
    weight: "2300",
    street: "Prodex Technologie Street",
    zip_code: "8010",
    canton: "Zurich",
    city: "Zurich",
  },
  {
    company_name: "GreenWave SA",
    email: "greenwave@example.com",
    material_cat: "PVC",
    product_cat: "Inflatable structures",
    color: "transparent",
    weight: "1800",
    street: "Eco-Fashion Avenue",
    zip_code: "9000",
    canton: "St. Gallen",
    city: "St. Gallen",
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

export default function SearchPage() {
  const [visible, setVisible] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const toast = useRef(null);

  const handleSeeDetails = (offer) => {
    setSelectedOffer(offer);
    setVisible(true);
  };

  const handleSendRequest = () => {
    setVisible(false);

    // Send a confirming alert
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail:
        "The offer details have been successfully sent to your email address",
      life: 5000,
    });
  };

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
              {" "}
              {/* Placeholder for picture */}
            </div>
            <div className="offer-details">
              <div className="detail">Material: {offer.material_cat}</div>
              <div className="detail">Product: {offer.product_cat}</div>
              <div className="detail">Color: {offer.color}</div>
              <div className="detail">Weight: {offer.weight} lbs</div>
              <div className="detail">City: {offer.city}</div>
              <Button
                rounded
                label="See details"
                className="p-button-primary"
                onClick={() => handleSeeDetails(offer)}
              />

              <Dialog
                header="Offer Details"
                visible={visible}
                style={{ width: "80%" }}
                onHide={() => setVisible(false)}
              >
                {selectedOffer && (
                  <div className="dialog-content">
                    {/* <div className="picture-holder">
                      {/* Placeholder for picture 
                    </div>{" "} */}
                    <div className="offer-details">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <div className="detail">
                        Company: {selectedOffer.company_name}
                      </div>
                      <div className="detail">Email: {selectedOffer.email}</div>
                      <div className="detail">
                        Material: {selectedOffer.material_cat}
                      </div>
                      <div className="detail">
                        Product: {selectedOffer.product_cat}
                      </div>
                      <div className="detail">Color: {selectedOffer.color}</div>
                      <div className="detail">
                        Weight: {selectedOffer.weight} lbs
                      </div>
                      <div className="detail">
                        Street: {selectedOffer.street}
                      </div>
                      <div className="detail">
                        Zip Code: {selectedOffer.zip_code}
                      </div>
                      <div className="detail">
                        Canton: {selectedOffer.canton}
                      </div>
                      <div className="detail">City: {selectedOffer.city}</div>
                      <Button
                        rounded
                        label="Send request email"
                        onClick={handleSendRequest}
                      />
                    </div>
                  </div>
                )}
              </Dialog>
              <Toast ref={toast} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

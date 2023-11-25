import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const materialCategories = [
  { label: "PP", value: "PP" },
  { label: "HDPE", value: "HDPE" },
  { label: "LDPE", value: "LDPE" },
  { label: "PET", value: "PET" },
  { label: "PVC", value: "PVC" },
  { label: "PS", value: "PS" },
  { label: "Other", value: "Other" },
];

const productCategories = [
  { label: "Medical equipment", value: "Medical equipment" },
  { label: "Packaging", value: "Packaging" },
  { label: "Construction", value: "Construction" },
];

const colors = [
  { label: "Transparent", value: "transparent" },
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Other", value: "other" },
];

export default function TakeOffer({ onCancelOffer }) {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [materialCat, setMaterialCat] = useState("");
  const [productCat, setProductCat] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const toast = useRef(null);

  async function handleSubmit() {
    const newOffer = {
      buyer_or_seller: "Buyer",
      company_name: companyName,
      email: email,
      material_cat: materialCat,
      product_cat: productCat,
      color: color,
      weight: weight,
      street: street,
      zip_code: zipCode,
      city: city,
    };

    try {
      const response = await fetch(
        "https://h4isrdfr3sq74nxxlomdjmrymu0eunme.lambda-url.ap-northeast-2.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOffer),
        }
      );

      if (response.ok) {
        console.log("Success! Data sent!");
        // Send a confirming alert
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "New offer was created!",
          life: 2000,
        });
      } else {
        console.error("Error sending offer data:", response.statusText);
        alert("Error sending offer data. Please try again.");
      }
    } catch (error) {
      console.error("Error sending offer data:", error);
      alert("Error sending offer data. Please try again.");
    }
  }

  return (
    <div className="offer-container p-rounded">
      <h2>Create an Offer</h2>
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-mb-2">
          <label htmlFor="companyName">Company Name</label>
          <InputText
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="email">Contact Email</label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="materialCat">Material Category</label>
          <Dropdown
            id="materialCat"
            options={materialCategories}
            value={materialCat}
            onChange={(e) => setMaterialCat(e.value)}
            placeholder="Select Material Category"
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="productCat">Product Category</label>
          <Dropdown
            id="productCat"
            options={productCategories}
            value={productCat}
            onChange={(e) => setProductCat(e.value)}
            placeholder="Select Product Category"
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="color">Color of the material</label>
          <Dropdown
            id="color"
            options={colors}
            value={color}
            onChange={(e) => setColor(e.value)}
            placeholder="Select Color"
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="weight">Weight (kg)</label>
          <InputText
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <label htmlFor="street">Street</label>
          <InputText
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="p-col-12 p-mb-2">
          <div className="p-grid">
            <div className="p-col-12 p-md-6">
              <div className="p-field">
                <label htmlFor="zipCode">PLZ</label>
                <InputText
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
            </div>
            <div className="p-col-12 p-md-6">
              <div className="p-field">
                <label htmlFor="city">City</label>
                <InputText
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-mb-2">
          <Button
            rounded
            label="Submit"
            className="m-3"
            style={{ marginBottom: "20px" }}
            onClick={handleSubmit}
          />

          <Button
            rounded
            label="Cancel"
            className="p-button-secondary"
            onClick={() => onCancelOffer()}
          />
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};


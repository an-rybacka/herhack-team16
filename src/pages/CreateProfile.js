// CreateProfile.js
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";

const industries = [
  { label: "", value: null },
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B" },
  { label: "Option C", value: "C" },
];

const productLines = [
  { label: "Product Line 1", value: "PL1" },
  { label: "Product Line 2", value: "PL2" },
  { label: "Product Line 3", value: "PL3" },
];

const plasticTypes = [
  { label: "Type 1", value: "Type1" },
  { label: "Type 2", value: "Type2" },
  { label: "Type 3", value: "Type3" },
];

export default function CreateProfile({ onSubmit }) {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState(null);
  const [selectedProductLines, setSelectedProductLines] = useState([]);
  const [selectedPlasticTypes, setSelectedPlasticTypes] = useState([]);
  const [city, setCity] = useState("");
  const [zip_code, setzip_code] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // Create a JSON object with the form data
    const newProfile = {
      companyName,
      industry,
      selectedProductLines,
      selectedPlasticTypes,
      city,
      zip_code,
      street,
      email,
      password,
    };

    // TODO: Store jsonData in a JSON file or send it to a server
    console.log(JSON.stringify(newProfile));

    // create a POST request and send new profile data to the database
    try {
      const response = await fetch(
        "https://3mh16rhi84.execute-api.ap-northeast-2.amazonaws.com/default/luck4her_details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProfile),
        }
      );
      if (response.ok) {
        alert("the data were succesfully sent");
      } else {
        // Handle non-successful response
        console.error("Error sending profile data in else:");
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error sending profile data in catch:", error);
    }

    onSubmit();
  };

  return (
    <div className="page-container">
      <div className="create-profile p-rounded">
        <h2>Create Your Profile</h2>
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
            <label htmlFor="industry">Industry</label>
            <Dropdown
              id="industry"
              options={industries}
              value={industry}
              onChange={(e) => setIndustry(e.value)}
              placeholder="Select an Industry"
            />
          </div>
          <div className="p-col-12 p-mb-2">
            <label htmlFor="productLines">Product Line</label>
            <MultiSelect
              id="productLines"
              value={selectedProductLines}
              options={productLines}
              onChange={(e) => setSelectedProductLines(e.value)}
              placeholder="Select Product Lines"
            />
          </div>
          <div className="p-col-12 p-mb-2">
            <label htmlFor="plasticTypes">Types of Plastic</label>
            <MultiSelect
              id="plasticTypes"
              value={selectedPlasticTypes}
              options={plasticTypes}
              onChange={(e) => setSelectedPlasticTypes(e.value)}
              placeholder="Select Plastic Types"
            />
          </div>
          <div className="p-col-12 p-mb-2 p-md-6">
            <label htmlFor="city">City</label>
            <InputText
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="p-col-12 p-mb-2 p-md-6">
            <label htmlFor="zip_code">zip_code</label>
            <InputText
              id="zip_code"
              value={zip_code}
              onChange={(e) => setzip_code(e.target.value)}
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
            <label htmlFor="email">Email Address</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-col-12 p-mb-2">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="p-col-12 p-m-2">
            <Button
              rounded
              label="Submit"
              className="m-3"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

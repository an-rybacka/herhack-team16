// CreateProfile.js
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const industries = [
  { label: "", value: null },
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B" },
  { label: "Option C", value: "C" },
];

export default function CreateProfile() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState(null);
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Create a JSON object with the form data
    const profileData = {
      companyName,
      industry,
      city,
      postcode,
      street,
      email,
      password,
    };

    // Convert the data to a JSON string
    const jsonData = JSON.stringify(profileData);

    // TODO: Store jsonData in a JSON file or send it to a server
    console.log(jsonData);

    // // Reset the form after submission
    // setCompanyName("");
    // setIndustry(null);
    // setCity("");
    // setPostcode("");
    // setStreet("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="create-profile">
      <h2>Create Your Profile</h2>
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <label htmlFor="companyName">Company Name</label>
          <InputText
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="p-col-12">
          <label htmlFor="industry">Industry</label>
          <Dropdown
            id="industry"
            options={industries}
            value={industry}
            onChange={(e) => setIndustry(e.value)}
            placeholder="Select an Industry"
          />
        </div>
        <div className="p-col-12 p-md-6">
          <label htmlFor="city">City</label>
          <InputText
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="p-col-12 p-md-6">
          <label htmlFor="postcode">Postcode</label>
          <InputText
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>
        <div className="p-col-12">
          <label htmlFor="street">Street</label>
          <InputText
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="p-col-12">
          <label htmlFor="email">Email Address</label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-col-12">
          <label htmlFor="password">Password</label>
          <InputText
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="p-col-12">
          <Button rounded label="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};



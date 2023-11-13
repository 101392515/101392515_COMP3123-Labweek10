import React, { useState } from 'react';
import './App.css';

function App() {
  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // State hook for displaying submitted form data
  const [formDataSubmitted, setFormDataSubmitted] = useState(null);

  // List of Canadian provinces for the dropdown
  const provincesList = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agreeTerms) {
      const formData = {
        email,
        fullName,
        address,
        city,
        province,
        postalCode
      };
      // Set the submitted form data to state
      setFormDataSubmitted(formData);
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
        </label>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="1234 Main St" required />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        </label>
        <label>
          Province:
          <select value={province} onChange={(e) => setProvince(e.target.value)} required>
            <option value="">Choose...</option>
            {provincesList.map((prov, index) => (
              <option key={index} value={prov}>{prov}</option>
            ))}
          </select>
        </label>
        <label>
          Postal Code:
          <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" required />
        </label>
        <label className="checkbox">
          Agree Terms & Condition 
        <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {formDataSubmitted && (
        <div>
          <h2>Submitted Information:</h2>
          <p>Email: {formDataSubmitted.email}</p>
          <p>Full Name: {formDataSubmitted.fullName}</p>
          <p>Address: {formDataSubmitted.address}</p>
          <p>City: {formDataSubmitted.city}</p>
          <p>Province: {formDataSubmitted.province}</p>
          <p>Postal Code: {formDataSubmitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
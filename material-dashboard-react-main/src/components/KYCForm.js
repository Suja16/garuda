import React, { useState } from 'react';

const KYCForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    panCard: null,
    aadharCard: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server).
    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      panCard: null,
      aadharCard: null,
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Centers the form vertically on the page
  };

  return (
    <div style={containerStyle}>
      <div className="kyc-form">
        <h2>KYC Verification Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="panCard">PAN Card (Upload)</label>
            <input
              type="file"
              name="panCard"
              id="panCard"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharCard">Aadhar Card (Upload)</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharCard">GST (Upload)</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharCard">IEC (Upload)</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#4f8de6', color: 'white',padding:'1vw',borderRadius:'5px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default KYCForm;

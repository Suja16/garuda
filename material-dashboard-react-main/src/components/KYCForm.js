import React, { useState } from 'react';
import MDBox from "components/MDBox";
import './KYCForm.css';




const KYCForm = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [docSelect, setDocSelect] = useState('');
  const [documentCode, setDocumentCode] = useState('');
  const [docIssue, setDocIssue] = useState('');
  const [date, setDate] = useState('');
  const [uploadDoc, setUploadDoc] = useState('');

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDocSelectChange = (event) => {
    setDocSelect(event.target.value);
  };

  const handleDocumentCodeChange = (event) => {
    setDocumentCode(event.target.value);
  };

  const handleDocIssueChange = (event) => {
    setDocIssue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleUploadDocChange = (event) => {
    setUploadDoc(event.target.value);
  };

  

  return (
    <MDBox py={3}>

    <body className="kyc-form">
      

      <h1> KYC Registration</h1>

      <div className='prod-form-field'>
        <label>Username:</label>
        <input type="username" value={username} onChange={handleUsernameChange} />
      </div>

      <div className='prod-form-field'>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>

      <div className='prod-form-field'>
        <label>Mobile no:</label>
        <input type="tel" value={mobileNo} onChange={handleMobileNoChange} />
      </div>

      <div className='prod-form-field'>
        <label >Address:</label>
        <textarea id="Address" placeholder="Enter address"type="text" value={address} onChange={handleAddressChange} className='address' />
      </div>

      {/* <div className='prod-form-field mrp'>
        <div>
        <label>GSTIN:</label>
        <input type="text" value={productMRP} onChange={handleProductMRPChange} />
        </div> */}

        <div className='prod-form-field docs'>
        <label>Select KYC Document:</label>
        <select value={docSelect} onChange={handleDocSelectChange}>
          <option value="">Select KYC Document</option>
          <option value="Category 1">Import Export Code (IEC)</option>
          <option value="Category 2">AD Code</option>
          <option value="Category 2">GSTIN</option>
          <option value="Category 2">Others</option>
        </select>
      </div> 

      <div className='prod-form-field'>
        <label>Document Code:</label>
        <input type="text" value={documentCode} onChange={handleDocumentCodeChange} />
      </div>

      <div className='prod-form-field'>
        <label>Document Issued By:</label>
        <input type="text" value={docIssue} onChange={handleDocIssueChange} />
      </div>

      <div className='prod-form-field'>
        <label for="issue-date">Date of issue:</label>
        <input type="date" id="issue-date" className='date' value={date} onChange={handleDateChange} />
      </div>

      {/* <div className='prod-form-field'>
        <label>Product Category:</label>
        <select value={productCategory} onChange={handleProductCategoryChange}>
          <option value="">Select Product Category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 2">Category 3</option>
          <option value="Category 2">Category 4</option>
          <option value="Category 2">Category 5</option>
          <option value="Category 2">Category 6</option>
          <option value="Category 2">Category 7</option>
          <option value="Category 2">Category 8</option>
          <option value="Category 2">Category 9</option>
          <option value="Category 2">Category 10</option>
        </select>
      </div> */}

      <div>
        <label for="myfile">Upload Document:</label>
        <input type="file" id="myFile" name="myFile" className='up-docs' value={uploadDoc} onChange={handleUploadDocChange} />
      </div>

      <div>
      <input type="submit" value="Submit" className='Submit'></input>
      </div>
    </body>
    </MDBox>
  );
};

export default KYCForm;


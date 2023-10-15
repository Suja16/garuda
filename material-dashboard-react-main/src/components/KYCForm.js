import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import './KYCForm.css';
import theme from "assets/theme";


const KYCForm = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [docSelect, setDocSelect] = useState('');
  const [documentCode, setDocumentCode] = useState('');
  const [docIssue, setDocIssue] = useState('');
  const [date, setDate] = useState('');
  const [uploadDoc, setUploadDoc] = useState('');

  // Event handlers
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
    <ThemeProvider theme={theme}>
      <Box py={3}>
        <div className="kyc-form">
          <h1> KYC Registration</h1>

          <div className='prod-form-field'>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Mobile no"
              type="tel"
              value={mobileNo}
              onChange={handleMobileNoChange}
            />
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Address"
              multiline
              rows={4}
              placeholder="Enter address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>

          <div className='prod-form-field docs'>
            <FormControl>
              <InputLabel>Select KYC Document</InputLabel>
              <Select
                value={docSelect}
                onChange={handleDocSelectChange}
              >
                <MenuItem value="">Select KYC Document</MenuItem>
                <MenuItem value="Category 1">Import Export Code (IEC)</MenuItem>
                <MenuItem value="Category 2">AD Code</MenuItem>
                <MenuItem value="Category 3">GSTIN</MenuItem>
                <MenuItem value="Category 4">Others</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Document Code"
              value={documentCode}
              onChange={handleDocumentCodeChange}
            />
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Document Issued By"
              value={docIssue}
              onChange={handleDocIssueChange}
            />
          </div>

          <div className='prod-form-field'>
            <TextField
              label="Date of issue"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>

          <div>
            <InputLabel>Upload Document</InputLabel>
            <input type="file" id="myFile" name="myFile" className='up-docs' value={uploadDoc} onChange={handleUploadDocChange} />
          </div>

          <div>
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default KYCForm;

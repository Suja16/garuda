import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import MDBox from './MDBox';
import Paper from "@mui/material/Paper";

const PostOfficeFinder = () => {
  const [pincode, setPincode] = useState('');
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => {
        setLoading(false);
        const data = response.data[0];
        if (data.Status === 'Success') {
          setPostOffices(data.PostOffice);
        } else {
          setPostOffices([]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setPostOffices([]);
      });
  };
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap:'1vw',
  };
  const paperStyles = {
    padding: '20px',
    maxWidth: '600px',
  };

  return (
    
    <MDBox py={3}>
    
    <Container style={containerStyles}>
    <Paper elevation={3} style={paperStyles}>
      <Typography variant="h4" style={{marginBottom:'2vw'}}>Indian Post Office Finder :</Typography>
      <TextField
        label="Enter PIN Code"
        variant="outlined"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{marginLeft:'1vw', color:'white'}}>
        Search
      </Button>
      {loading && <p>Loading...</p>}
      {postOffices.length > 0 && (
        <div>
          <Typography variant="h5">Nearest Post Offices:</Typography>
          <ul>
            {postOffices.map((office, index) => (
              <li key={index}>{office.Name}</li>
            ))}
          </ul>
        </div>
      )}
      </Paper>
    </Container>
    
    </MDBox>
  );
};

export default PostOfficeFinder;

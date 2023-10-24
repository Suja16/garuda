
//THIS IS THE TEXT BASED POST OFFICE FINDER
//DEVELOPMENT OF MAP BASED IS UNDERWAY

/* import React, { useState } from 'react';
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
      .get(https://api.postalpincode.in/pincode/${pincode})
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

export default PostOfficeFinder; */

//THIS IS THE TEXT BASED POST OFFICE FINDER
//DEVELOPMENT OF MAP BASED IS UNDERWAY


import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

function Map() {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    
    mapboxgl.accessToken = "pk.eyJ1IjoiYWRpdHlhLWNoYXZhbiIsImEiOiJjbG80ZnE3MGUwMW52MmtvMmVjcjNiYWs3In0.ELnPs9TfN8H2q2bF21eSww"; // Replace with your Mapbox access token
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", 
      center: [72.8839000077673,19.021412641574997], 
      zoom: 12, 
    });

    
    const searchEndpoint = "https://api.mapbox.com/search/searchbox/v1/retrieve/dXJuOm1ieHJldDpJcEpoSE5fRDhET3RTR0NVN3dWRDIxQ0NWQmQzUU50dFY4YXZzZUlKZlRLT1ZVaUZyU29tOGlhZWVmSEZfdXdDRjJ6Q0hGWjVVLVhJWm9TLVlTOVdwUXpGYklld3pEdld2QVp1QkJZUnZpUmE0SkJWbDZqRnVyckZrYkZlZm1MWnJQazQzeDhDc2Z5NW9WZG9FbjFVR19tb0FJYW43TjVoenNpaUcta042STViOUloc1pueDZLWTdSMk5VMVZLSzQ3MTBqVnJyNVo5dkx4TnJRYlFPYUVXaHluMm5KZlV0b0NiVzRaY2NqOVhSaUw2bEtsZUREYk1RRlZaNEtybkZFTkFSY29STkRMeUJobXdkOXBfNm45SGk4MDlZNk1IcmRobUZLRktBUFVNRmdRY0FTSVNMUzRnTnlkVE9QUEt4NER2VWU2bVNJem5LR1NCNkRLTkc4dUt3UldySjQwM25KQjh6MUY3cl9MWkJ3dm1UbG10RUdKeS02UVJjY1U2N1VvN00yTkk5WTJmVEtab212blVMYmRQX085YmpBTHA1RkllYzV3ZG51ZlNCZDQ4cTRXcnhDc0taS0FTUHZNTDQ3WVNNeDdDZl85YXZJblB4eHhLUkh4NHcyZEZ0Uk54dF9MLVRBWUZxYS1LOFRiVTh3eG9nVW53cXQwQl83SkRMMkdTRk5taUc3QzlQbFJoSmUxcllzS1l0SFFJNlE2TmQyR0ZXTzRfNktxOFliUF9HZkY4SVJHS3AzZEJsdmxjOWg4dWVZdTRrMWRFaG9Xb21NeGpkckU0a190VE04Uk13UDZGUlRhMUxUa0VRMlQ3ZnJ1Smh5aDBzc1hFYXVHb2xpNENuTm8wQldZQzdoVWhTbEU0NGw5dDgtOWpvS3htWDNpXzNxZzFseDlSUjE0U3F2dWo0dlhYa2NWYWlocWM5bWJlUlkza09BYm1BWUg2TlNqOEp5UFJDVlNDVUJiM2JGTU0wd04xMmlyRkxFdm1udGNzdXpxN01Ea1NVekIzRU5NYUVmaHhDbmdFZ0xVanN3QmJUVllaMnJrSHk0UDFyQ2tNc2hpTGVXMkw1eVFvaHRUREhaa0hYVzJPbjFMVWVsM0VnR0t1OE9peGRQVTJoZVVrbU5YSGtxZm9Rd0J5SG1CV1AyZmRocXJmNHJjYkFCejJuTGJ1NXB1SzNRalJqSlhZVHFRY2F3UE1jUldUdGRpenhHbGN4dFRyWXJtSVIzaUdIU3VSV2hCaVdBN2J3djdyX05zVW5MU0N1cVdFeDh0ZGRUeTg2MDE5STI1bmhOcWtLSlVpc3lqell1WG04NnBHRU5sVTdHakgtOFlCMXBjZkwyM1ZpaW8xWkYwdHc5bmRxVzMyVlFzQWpITGJNdGx6enE4YkJ5Z2RSdGl2UktJdzQ3WGRnRGVtSU8yaFYwR0x1b0laSm9jVTlhSk4wSjVrZFpmWHJWc3Q3WWZFeEdRZWs0Y05ZOEhvSmxUVUpxU3M5cm1sM1IyanR3V18yU1VJNi1qRUtGTlhvRDZmQjBrMVU3eHJ0VHh3aHFmT1RlSHZuYnBxWXN1cWRxb3I1eGFfRkZmZzRUQ09YbFBZd18zMDZsYmFLRElyVUpZYWZudjZ4c3FDazFucmY3Y0lwR2Iybld5eTU4WjJRX0I2dFZqRTk5Qk1MVHdJTG5tbHA0ZDV3T2xhcU85ZnNhS1B0TWZwUnZPU21HbThhSXNOV29BZXFqTE1idDlmcUtnekc2Y25adUl6VHM1UTNxSFpzT0FlR0JlOGtUSUJkV0Jnb1BSS1YtQUE2aGFKMk1pVkUtOXZMZmNBM0FxYkN2QTRDcFQyNWVPaGRWUDhRN25WVTc4aU5MUUtmbGxUREVjVmhNMmNkYVRWbHVQdXZVRVpudm95Tll6NkFnajZxUm9PRlpPcEl6WWRfSmltTWszOWpsQWlOcTd3T1o2a0VyVHJ0VEpwWk0xTWRDb2lHRnhCcmN4ODBqMkFoalUwMXA=?session_token=0c0831dc-a8cc-4a21-88b6-22b281f085da&access_token=pk.eyJ1IjoiYWRpdHlhLWNoYXZhbiIsImEiOiJjbG80ZnE3MGUwMW52MmtvMmVjcjNiYWs3In0.ELnPs9TfN8H2q2bF21eSww";

    
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setMapData(data);

        
        const coordinates = data.features.map((feature) => feature.center);

        
        coordinates.forEach((coord) => {
          new mapboxgl.Marker().setLngLat(coord).addTo(map);
        });

        
        const bounds = new mapboxgl.LngLatBounds();
        coordinates.forEach((coord) => {
          bounds.extend(coord);
        });
        map.fitBounds(bounds, { padding: 50 }); 
      })
      .catch((error) => {
        console.error("Error fetching Mapbox data: ", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        id="map"
        style={{
          width: "500px", 
          height: "500px", 
          marginLeft: "100px",
          marginTop: "150px" 
        }}
      ></div>
    </div>
  );
}

export default Map;

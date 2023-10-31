
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

/* center: [72.8839000077673, 19.021412641574997], */
/* pk.eyJ1IjoiYWRpdHlhLWNoYXZhbiIsImEiOiJjbG80ZnE3MGUwMW52MmtvMmVjcjNiYWs3In0.ELnPs9TfN8H2q2bF21eSww */

import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import "./Map.css"; // Import the CSS file for styling

function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYWRpdHlhLWNoYXZhbiIsImEiOiJjbG80ZnE3MGUwMW52MmtvMmVjcjNiYWs3In0.ELnPs9TfN8H2q2bF21eSww"; // Replace with your Mapbox access token

    const mapInstance = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8839000077673, 19.021412641574997], // Set an initial center
      zoom: 12, // Set an initial zoom
    });

    mapInstance.on("load", async () => {
      setMap(mapInstance);

      // Add map controls here
      mapInstance.addControl(new mapboxgl.NavigationControl(), "top-right");
      mapInstance.addControl(new mapboxgl.ScaleControl(), "bottom-left");
      mapInstance.addControl(new mapboxgl.FullscreenControl(), "top-right");

      // Add Geocoding control
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true, // Disabling the default marker
      });
      

      mapInstance.addControl(geocoder, "top-left");

      geocoder.on("result", async (e) => {
        // Handle the result when a user selects a location
        // Example: Fetch data or perform other operations based on the selected location
        console.log("Selected location:", e.result);
      });
    });

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map) {
      map.on("moveend", async () => {
        // Add logic here for any future functionality triggered by map movement
      });
    }
  }, [map]);

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
    </div>
  );
}

export default Map;

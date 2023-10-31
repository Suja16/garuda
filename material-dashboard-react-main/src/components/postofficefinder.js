
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
import "./Map.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

function Map() {
  const [map, setMap] = useState(null);
  const [markedLocations, setMarkedLocations] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYWRpdHlhLWNoYXZhbiIsImEiOiJjbG80ZnE3MGUwMW52MmtvMmVjcjNiYWs3In0.ELnPs9TfN8H2q2bF21eSww"; // Replace with your Mapbox access token

    const initializeMap = (userLocation) => {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: userLocation,
        zoom: 12,
      });

      mapInstance.on("load", () => {
        setMap(mapInstance);

        mapInstance.addControl(new mapboxgl.NavigationControl(), "top-right");
        mapInstance.addControl(new mapboxgl.ScaleControl(), "bottom-left");
        mapInstance.addControl(new mapboxgl.FullscreenControl(), "top-right");
        addMarker(userLocation, mapInstance);
        addSearchBox(mapInstance, "top-left");
        fetchPostOfficeLocations(userLocation, mapInstance);
      });
    };

    const addSearchBox = (mapInstance, position) => {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
      });
      geocoder.on("result", (event) => {
        const { result } = event;
        const coordinates = result.center;
        const link = `https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}`;
        console.log("Google Maps link:", link);
      });

      mapInstance.addControl(geocoder, position);
    };

    const addMarker = (coordinates, mapInstance) => {
      const marker = new mapboxgl.Marker({ color: "#FF0000" }) // Set the color to red
        .setLngLat(coordinates)
        .addTo(mapInstance);
    };

    const fetchPostOfficeLocations = async (userLocation, mapInstance) => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/post%20office.json?proximity=${userLocation[0]},${userLocation[1]}&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();

      if (data && data.features) {
        setMarkedLocations(data.features);
        data.features.forEach((feature) => {
          new mapboxgl.Marker()
            .setLngLat(feature.center)
            .addTo(mapInstance)
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<a href="https://www.google.com/maps/search/?api=1&query=${feature.center[1]},${feature.center[0]}" target="_blank">${feature.center[1]}, ${feature.center[0]}</a>`
              )
            );
        });
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = [position.coords.longitude, position.coords.latitude];
            initializeMap(userLocation);
          },
          (error) => {
            console.error("Error getting user location:", error);
            initializeMap([72.8839, 19.0214]);
          }
        );
      } else {
        initializeMap([72.8839, 19.0214]);
      }
    };

    getUserLocation();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
      <div>
        {markedLocations.length > 0 && (
          <div>
            <h3>Marked Locations' Coordinates:</h3>
            <ul>
              {markedLocations.map((location, index) => (
                <li key={index}>{`${location.center[1]}, ${location.center[0]}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const containerStyle = {
  marginTop: "50px",
};

const productContainerStyle = {
  display: "flex",
  alignItems: "center", 
};

const imageStyle = {
  width: "200px", 
  height: "200px",
  marginRight: "5px", 
};

const sectionStyle = {
  backgroundColor: "#f7f7f7",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  flex: 1, 
};

const sectionTextStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
};

function ProductListing() {
  const [products, setProducts] = useState([]); 

  
  const fetchProducts = async () => {
   
    const querySnapshot = await getDocs(collection(firestore, 'products'));
    const productData = [];
    
    querySnapshot.forEach((doc) => {
      productData.push(doc.data());
    });

    setProducts(productData);
  };

  useEffect(() => {
  
    fetchProducts();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox style={containerStyle}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} key={index}>
              <MDBox mb={3}>
                <h2>{product.title}</h2>
                <div style={productContainerStyle}>
                  {/* Display the image using an <img> tag */}
                  <img
                    src={product.image}
                    alt={product.title}
                    style={imageStyle}
                  />
                  <div style={sectionStyle}>
                    <p style={sectionTextStyle}>
                      <strong>Product Description:</strong> {product.description}
                      <br />
                      <strong>Product MRP:</strong> {product.mrp}
                      <br />
                      <strong>Product Selling Price:</strong> {product.sp}
                      <br />
                      <strong>Product Category:</strong> {product.category}
                      <br />
                      <strong>Product SKU:</strong> {product.sku}
                    </p>
                  </div>
                </div>
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ProductListing;

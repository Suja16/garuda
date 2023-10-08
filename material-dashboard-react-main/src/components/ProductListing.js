import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const containerStyle = {
  marginTop: "50px",
};

const productContainerStyle = {
  display: "flex",
  alignItems: "center", 
};

const imageStyle = {
  widht: "200px", 
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
  const product = {
    title: " #1 Warli Painted Pot",
    sku: "750",
    description:
      "Warli painting is simple and linear, with maximum use of triangular shapes. They draw inspiration from every life for their themes. The most important aspect of the painting is that it does not depict mythological characters or images of deities, but social life.",
    mrp: "₹5000",
    sp: "₹6000",
    category: "Pottery",
    image:
      "https://i.pinimg.com/1200x/86/8a/d1/868ad1c3b3a2397abac6216f148ef3f2.jpg",
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox style={containerStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox mb={3}>
              <h2>{product.title}</h2>
              <div style={productContainerStyle}>
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ProductListing;

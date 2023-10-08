// ProductListed.js

import React from 'react';
import MDBox from "components/MDBox";
import './ProductListed.css'; // Import the CSS file

const ProductListed = () => {
  // Define your product data here
  const products = [
    {
      id: 1,
      productTitle: "Warli Painted Earthen Pots",
      productSKU: "Normal brown pot with white paintings",
      productDescription:
        "Warli painting is of tribal art mostly created by the tribal people from the North Sahyadri Range in Maharashtra, India. This range encompasses cities such as Dahanu, Talasari, Jawhar, Palghar, Mokhada, and Vikramgad of Palghar district. This tribal art was originated in Maharashtra, where it is still practiced today.",
      productMRP: "₹5000",
      productSP: "₹6000",
      productCategory: "Pottery",
      productImage: "https://i.pinimg.com/1200x/86/8a/d1/868ad1c3b3a2397abac6216f148ef3f2.jpg",
    },
    // Add more product entries if needed
  ];

  return (
    <MDBox py={3}>
      <div className='product-list'>
        <h1>Product Listed</h1>
        {products.map((product) => (
          <div className='prod-form-field' key={product.id}>
            <h2>{product.productTitle}</h2>
            <p>SKU: {product.productSKU}</p>
            <p>Description: {product.productDescription}</p>
            <p>MRP: {product.productMRP}</p>
            <p>Selling Price: {product.productSP}</p>
            <p>Category: {product.productCategory}</p>
            <img src={product.productImage} alt={product.productTitle} />
          </div>
        ))}
      </div>
    </MDBox>
  );
};

export default ProductListed;

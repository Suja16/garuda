import React, { useState, useEffect } from 'react';
import MDBox from "components/MDBox";
import './ConsignmentForm.css';

const ConsignmentForm = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productSKU, setProductSKU] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productMRP, setProductMRP] = useState('');
  const [productSP, setProductSP] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [blockedKeywords, setBlockedKeywords] = useState([]);

  useEffect(() => {
    
    fetch('/blocked-keywords.txt')
      .then((response) => response.text())
      .then((text) => {
        
        const keywords = text.split('\n');
        setBlockedKeywords(keywords);
      })
      .catch((error) => {
        console.error('Error loading blocked keywords:', error);
      });
  }, []);

  const handleProductTitleChange = (event) => {
    setProductTitle(event.target.value);
  };

  const handleProductSKUChange = (event) => {
    setProductSKU(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductMRPChange = (event) => {
    setProductMRP(event.target.value);
  };

  const handleProductSPChange = (event) => {
    setProductSP(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const containsBlockedKeyword = blockedKeywords.some((keyword) =>
      productDescription.toLowerCase().includes(keyword.toLowerCase())
    );

    if (containsBlockedKeyword) {
      setErrorMessage('Contains Blocked Keyword. Please Make sure you are trying to sell a product that is allowed to sell');
    } else {
      
      setProductTitle('');
      setProductSKU('');
      setProductDescription('');
      setProductMRP('');
      setProductSP('');
      setProductCategory('');
      setProductImage('');
      setErrorMessage('');
    }
  };

  return (
    <MDBox py={3}>
      <form className="consignment-form" onSubmit={handleSubmit}>
        <h1>Add Product</h1>

        <div className='prod-form-field'>
          <label>Product Title:</label>
          <input type="text" value={productTitle} onChange={handleProductTitleChange} />
        </div>

        <div className='prod-form-field'>
          <label>Product SKU:</label>
          <input type="text" value={productSKU} onChange={handleProductSKUChange} />
        </div>

        <div className='prod-form-field'>
          <label>Product Description:</label>
          <textarea
            id="Description"
            placeholder="Enter product description"
            type="text"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            className='description'
          />
        </div>

        <div className='prod-form-field mrp'>
          <div>
            <label>Product MRP:</label>
            <input type="text" value={productMRP} onChange={handleProductMRPChange} />
          </div>
        </div>

        <div className='prod-form-field'>
          <label>Product Selling Price:</label>
          <input type="text" value={productSP} onChange={handleProductSPChange} />
        </div>

        <div className='prod-form-field'>
          <label>Product Category:</label>
          <select value={productCategory} onChange={handleProductCategoryChange}>
            <option value="">Select Product Category</option>
            <option value="Category 1">Ceramics</option>
            <option value="Category 2">Jewellery</option>
           
          </select>
        </div>

        <div>
          <label for="myfile">Product Image:</label>
          <input
            type="file"
            id="myFile"
            name="myFile"
            value={productImage}
            onChange={handleProductImageChange}
          />
          <input type="submit" value="Submit" className='Submit'></input>
        </div>

        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </MDBox>
  );
};

export default ConsignmentForm;

import React, { useState } from 'react';
import MDBox from 'components/MDBox';
import './ConsignmentForm.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB_k8huWepobUHQs2WqlCUI8Lh514MS7D8',
  authDomain: 'garuda-d278e.firebaseapp.com',
  projectId: 'garuda-d278e',
  storageBucket: 'garuda-d278e.appspot.com',
  messagingSenderId: '47109051213',
  appId: '1:47109051213:web:958dc62e04eed168319d04',
  measurementId: 'G-6MM30DX7TV',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

const ConsignmentForm = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productSKU, setProductSKU] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productMRP, setProductMRP] = useState('');
  const [productSP, setProductSP] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [ProductStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [productAdded, setProductAdded] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showTitleHint, setShowTitleHint] = useState(false);

  const blockedKeywords = [
    'CATHINONE', 'DOB', 'BROLAMFETAMINE', 'DET', 'DMA', 'Gun', 'engineoil' // ... (your other keywords)
  ];

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

  const handleProductStockChange = (event) => {
    setProductStock(event.target.value);
  };

  const handleProductImageChange = async (event) => {
    const file = event.target.files[0];
    const fileName = productSKU || 'uniqueFileName';
    const storageRef = ref(storage, `productImages/${fileName}`);
    try {
      const snapshot = await uploadBytesResumable(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setProductImage(downloadURL);
      setSelectedFileName(file.name);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const containsBlockedKeyword = blockedKeywords.some((keyword) =>
      productDescription.toLowerCase().includes(keyword.trim().toLowerCase())
    );

    if (containsBlockedKeyword) {
      setErrorMessage('Contains Blocked Keyword. Please make sure you are trying to sell a product that is allowed.');
    } else {
      const productData = {
        title: productTitle,
        sku: productSKU,
        description: productDescription,
        mrp: productMRP,
        sp: productSP,
        category: productCategory,
        stock: ProductStock,
        image: productImage,
      };

      try {
        const docRef = await addDoc(collection(firestore, 'products'), productData);
        console.log('Document written with ID: ', docRef.id);
        setProductAdded(true);

        setProductTitle('');
        setProductSKU('');
        setProductDescription('');
        setProductMRP('');
        setProductStock('');
        setProductSP('');
        setProductCategory('');
        setProductImage('');
        setErrorMessage('');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <MDBox py={3}>
      <form className="consignment-form" onSubmit={handleSubmit}>
        <h1>Add Product</h1>

        <div className='prod-form-field'>
          <label>Product Title:</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={productTitle}
              onChange={handleProductTitleChange}
              onFocus={() => setShowTitleHint(true)}
              onBlur={() => setShowTitleHint(false)}
            />
            {showTitleHint && <div className="title-hint">This Field Cannot Be Edited</div>}
          </div>
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
          <label>Product Stock:</label>
          <input type="text" value={ProductStock} onChange={handleProductStockChange} />
        </div>

        <div className='prod-form-field'>
          <label>Product Category:</label>
          <select value={productCategory} onChange={handleProductCategoryChange}>
            <option value="">Select Product Category</option>
            <option value="Ceramics">Ceramics</option>
            <option value="Textile">Textile</option>
            <option value="HandiCrafts">HandiCrafts</option>
            <option value="jewellery">jewellery</option>
          </select>
        </div>

        <div className='prod-form-field'>
          <label htmlFor="myFile">Product Image:</label>
          <input
            type="file"
            id="myFile"
            name="myFile"
            onChange={handleProductImageChange}
          />

          {selectedFileName && <div className="selected-file-name">Selected File: {selectedFileName}</div>}
        </div>
        <div><input type="submit" value="Submit" className='Submit' ></input></div>

        {productAdded && <div className="success-message">Product Added Successfully</div>}

        {errorMessage && <div className="banning-message">{errorMessage}</div>}
      </form>
    </MDBox>
  );
};

export default ConsignmentForm;

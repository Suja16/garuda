import React, { useState, useEffect } from 'react';
import MDBox from 'components/MDBox';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore,doc,getDoc,updateDoc,setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Grid } from '@mui/material';
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
const storage = getStorage(app);

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    title: '',
    sku: '',
    description: '',
    mrp: '',
    sp: '',
    category: '',
    Stock: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(firestore, 'products', productId);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          setProduct({ ...productSnapshot.data(), id: productId });
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSave = async () => {
    try {
      if (imageFile) {
        const fileName = product.sku || 'uniqueFileName';
        const storageRef = ref(storage, `productImages/${fileName}`);
        const snapshot = await uploadBytesResumable(storageRef, imageFile);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setProduct({ ...product, image: downloadURL });
      }

      const productDoc = doc(firestore, 'products', productId);
      await updateDoc(productDoc, product);
      console.log('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div  style={{width:'50%', display:'flex',flexDirection:'column',marginLeft:'30vw',marginBottom:'20px'}}>
      <h1>Edit Product</h1>
      <MDBox mb={3}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>SKU:</label>
        <input
          type="text"
          name="sku"
          value={product.sku}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>MRP:</label>
        <input
          type="text"
          name="mrp"
          value={product.mrp}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>Selling Price:</label>
        <input
          type="text"
          name="sp"
          value={product.sp}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>Stock:</label>
        <input
          type="text"
          name="Stock"
          value={product.Stock}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
      </MDBox>
      <MDBox mb={3}>
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </MDBox>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProduct;

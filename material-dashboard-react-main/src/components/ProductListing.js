import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import LongMenu from "./Menu/HeightMenu";

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
const inputStyle = {
  width: '60px', 
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  textAlign: 'right', 
};

function ProductListing() {
  const [products, setProducts] = useState([]); 
  const [editMode, setEditMode] = useState({});
  const [editedValues, setEditedValues] = useState({});

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'products'));
    const productData = [];
    
    querySnapshot.forEach((doc) => {
      productData.push({ ...doc.data(), id: doc.id });
      setEditMode({ ...editMode, [doc.id]: false });
      setEditedValues({ ...editedValues, [doc.id]: {} });
    });

    setProducts(productData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    setEditMode({ ...editMode, [id]: true });
    setEditedValues({ ...editedValues, [id]: products.find(product => product.id === id) });
  };

  const handleSave = async (id) => {
    try {
      await updateDoc(doc(firestore, 'products', id), editedValues[id]);
      setEditMode({ ...editMode, [id]: false });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleChange = (id, field, value) => {
    setEditedValues({ 
      ...editedValues, 
      [id]: { 
        ...editedValues[id], 
        [field]: value 
      } 
    });
  };
  
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
                  <img
                    src={product.image}
                    alt={product.title}
                    style={imageStyle}
                  />
                  <div style={sectionStyle}>
                    <p style={sectionTextStyle}>
                      <strong>Product Description:</strong> {product.description}
                      <br />
                      <strong>Product MRP:</strong> {editMode[product.id] ? (
                        <input
                        type="text"
                        value={editedValues[product.id]?.mrp || product.mrp}
                        onChange={(e) => handleChange(product.id, 'mrp', e.target.value)}
                        style={inputStyle}
                      />
                      ) : (
                        product.mrp
                      )}
                      <br />
                      <strong>Product Selling Price:</strong> {editMode[product.id] ? (
                        <input
                        type="text"
                        value={editedValues[product.id]?.sp || product.sp}
                        onChange={(e) => handleChange(product.id, 'sp', e.target.value)}
                        style={inputStyle} 
                      />
                      ) : (
                        product.sp
                      )}
                      <br />
                      <strong>Product Stock:</strong> {editMode[product.id] ? (
                        <input
                        type="text"
                        value={editedValues[product.id]?.Stock || product.Stock}
                        onChange={(e) => handleChange(product.id, 'Stock', e.target.value)}
                        style={inputStyle} 
                      />
                      ) : (
                        product.Stock
                      )}
                      
                      <br />
                      <strong>Product SKU:</strong> {product.sku}
                      <br />

                      <strong>Product Category:</strong> {product.category}
                      <br />
                      {editMode[product.id] ? (
                        <button onClick={() => handleSave(product.id)}>
                          Save
                        </button>
                      ) : (
                        <button onClick={() => handleEdit(product.id)}>
                          Quick Edit
                        </button>
                      )}
                    </p>
                    <LongMenu />
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
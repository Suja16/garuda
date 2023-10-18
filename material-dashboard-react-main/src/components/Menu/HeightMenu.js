import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditProduct from 'components/Edit-Product';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, updateDoc, deleteDoc, collectionGroup, getDoc } from 'firebase/firestore';

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

const ITEM_HEIGHT = 48;

export default function LongMenu({ docId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setAnchorEl(null);
    navigate('/editprod');
  };

  /* const handleDeleteClick = async (id) => {
  
    try {
      await deleteDoc(firestore, 'products', product => product.id === id);
      console.log('Document successfully deleted');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  
    setAnchorEl(null);
  }; */

  const handleDeleteClick = (id) => {
    firestore.collection('products')
    .doc()
    .doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    
  }

  const Edit = [
    {
      type: 'collapse',
      name: 'Edit Product',
      key: 'Edit-Product',
      route: 'Edit-Product',
      component: <EditProduct />,
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
        {Edit.map((option) => (
          <MenuItem key={option.key} onClick={handleEditClick}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

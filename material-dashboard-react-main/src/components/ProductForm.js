import React, { useState, useEffect } from 'react';
import MDBox from "components/MDBox";
import './ConsignmentForm.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_k8huWepobUHQs2WqlCUI8Lh514MS7D8",
  authDomain: "garuda-d278e.firebaseapp.com",
  projectId: "garuda-d278e",
  storageBucket: "garuda-d278e.appspot.com",
  messagingSenderId: "47109051213",
  appId: "1:47109051213:web:958dc62e04eed168319d04",
  measurementId: "G-6MM30DX7TV"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


const ConsignmentForm = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productSKU, setProductSKU] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productMRP, setProductMRP] = useState('');
  const [productSP, setProductSP] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  /* const [blockedKeywords, setBlockedKeywords] = useState([]); */

/*   useEffect(() => {
    
    fetch('/blocked-keywords.txt')
      .then((response) => response.text())
      .then((text) => {
      
        const keywords = text.split(/\r\n|\r|\n/).filter((keyword) => keyword.trim() !== '');
        setBlockedKeywords(keywords);
      })
      .catch((error) => {
        console.error('Error loading blocked keywords:', error);
      });
  }, []); */

  const blockedKeywords = ['CATHINONE', 'DOB', 'BROLAMFETAMINE', 'DET', 'DMA', 'DMHP', 'DMT', 'DOET', 'ETICYCLIDINE', 'PCE', 'ETRYPTAMINE', 'N-hydroxy MDA', '(+)-LYSERGIDE', 'LSD, LSD-25', 'MDE, N-ethyl MDA', 'MDMA', 'mescaline', 'methcathinone', '4-methylaminorex', 'MMDA', '4-MTA', 'parahexyl', 'PMA', 'psilocine, psilotsin', 'PSILOCYBINE', 'ROLICYCLIDINE', 'PHP', 'PCPY', 'STP', 'DOM', 'TENAMFETAMINE', 'MDA', 'TENOCYCLIDINE', 'TCP', 'TMA', 'AMFETAMINE', 'AMINEPTINE', 'DEXAMFETAMINE', 'DRONABINOLa', 'FENETYLLINE', 'LEVAMFETAMINE', 'MECLOQUALONE', 'METAMFETAMINE', 'METAMFETAMINE RACEMATE', 'METHAQUALONE', 'METHYLPHENIDATE', 'PHENCYCLIDINE', 'amphetamine', '2C-B', 'dexamphetamine', 'delta-9-tetrahydro- cannabinol and its stereochemical variants', 'levamphetamine', 'levomethamphetamine', 'methamphetamine', 'methamphetamine racemate', 'PCP', 'PHENMETRAZINE', 'SECOBARBITAL', 'ZIPEPROL', 'AMOBARBITAL', 'BUPRENORPHINE', 'BUTALBITAL', 'CATHINE', 'CYCLOBARBITAL', 'FLUNITRAZEPAM', 'GLUTETHIMIDE', 'PENTAZOCINE', 'PENTOBARBITAL', '(+)-norpseudoephedrine', 'ALLOBARBITAL', 'ALPRAZOLAM', 'AMFEPRAMONE', 'AMINOREX', 'BARBITAL', 'BENZFETAMINE', 'BROMAZEPAM', 'BROTIZOLAM', 'CAMAZEPAM', 'CHLORDIAZEPOXIDE', 'CLOBAZAM', 'CLONAZEPAM', 'CLORAZEPATE', 'CLOTIAZEPAM', 'CLOXAZOLAM', 'DELORAZEPAM', 'DIAZEPAM', 'ESTAZOLAM', 'ETHCHLORVYNOL', 'ETHINAMATE', 'ETHYL LOFLAZEPATE', 'ETILAMFETAMINE', 'FENCAMFAMIN', 'FENPROPOREX', 'FLUDIAZEPAM', 'FLURAZEPAM', 'HALAZEPAM', 'HALOXAZOLAM', 'KETAZOLAM', 'LEFETAMINE', 'LOPRAZOLAM', 'diethylpropion', 'benzphetamine', 'butobarbital', 'N-ethylamphetamine', 'GHB', 'SPA', 'LORAZEPAM', 'LORMETAZEPAM', 'MAZINDOL', 'MEDAZEPAM', 'MEFENOREX', 'MEPROBAMATE', 'MESOCARB', 'METHYLPHENOBARBITAL', 'METHYPRYLON', 'MIDAZOLAM', 'NIMETAZEPAM', 'NITRAZEPAM', 'NORDAZEPAM', 'OXAZEPAM', 'OXAZOLAM', 'PEMOLINE', 'PHENDIMETRAZINE', 'PHENOBARBITAL', 'PHENTERMINE', 'PINAZEPAM', 'PIPRADROL', 'PRAZEPAM', 'PYROVALERONE', 'SECBUTABARBITAL', 'TEMAZEPAM', 'TETRAZEPAM', 'TRIAZOLAM', 'VINYLBITAL', 'ZOLPIDEM', 'Allobarbital', 'Amfepramone', 'Amfetamine', 'Amineptine', 'Aminorex', 'Amobarbital', 'Barbital', 'Benzfetamine', 'Brolamfetamine (DOB)', 'Buprenorphine', 'Cathine', 'Chlordiazepoxide', 'Clorazepate', 'Cyclobarbital', 'DET', 'Dexamfetamine', 'Aminophenazone', 'Glutamate', 'Hydrochloride', 'Resinate', 'Acetylsalicylate', 'Adipate', 'Aspartate', 'Bitartrate', 'Hydrochloride', 'Para-aminophencylacetate', 'Parachlorophenoxyacetate', 'Pentobarbiturate', 'Phosphate (1 mol. base)', 'Phosphate (2 mol. base) Resinate', 'Sulfate (2 mol. base)', 'Tannate'];

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if the description contains blocked keywords
    const containsBlockedKeyword = blockedKeywords.some((keyword) =>
      productDescription.toLowerCase().includes(keyword.trim().toLowerCase())
    );
  
    if (containsBlockedKeyword) {
      setErrorMessage('Contains Blocked Keyword. Please make sure you are trying to sell a product that is allowed.');
    } else {
      // Create a data object with the form values
      const productData = {
        title: productTitle,
        sku: productSKU,
        description: productDescription,
        mrp: productMRP,
        sp: productSP,
        category: productCategory,
        image: productImage,
      };
  
      try {
        // Add the productData to Firestore
        const docRef = await addDoc(collection(firestore, 'products'), productData);
        console.log('Document written with ID: ', docRef.id);
  
        // Clear the form fields and error message
        setProductTitle('');
        setProductSKU('');
        setProductDescription('');
        setProductMRP('');
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

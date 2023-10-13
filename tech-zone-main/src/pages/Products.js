import { useSelector } from "react-redux";
import { FiLoader } from "react-icons/fi";
import Card from "../components/Card";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, updateDoc } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

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


const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  return (
    <div className="product-section container mx-auto px-10 py-10 ">
      <h2 className="section-title uppercase font-bold space-font  text-2xl mb-10 text-center tracking-wider ">
        Browse All Products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-10">
        {status && (
          <span className="loader text-center col-span-full">
            <FiLoader className="inline-block animate-spin" />
          </span>
        )}

        {data?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

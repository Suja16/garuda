import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SearchBar from "./components/SearchBar"; // Import the SearchBar component
import './index.css';

function App() {
  // Define a function to handle search
  // const handleSearch = (query) => {
  //   // You can add your API request logic here to search for products
  //   console.log("Searching for:", query);
  // };

  return (
    <>
      <Navbar />
      <div className="app min-h-screen bg-gray-50 text-gray-700">
        
        {/* <SearchBar onSearch={handleSearch} /> Render the SearchBar */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

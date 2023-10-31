import React from 'react';
import Landnav from './Navbar';
import CarouselMUI from './CarouselMUI';
import AboutUs from './AboutUs';
import Collab from './Collab';
import PopularCategories from './PopularCategories';
import Features from './Features';
import MSME from './MSME';
import StayUpdated from './StayUpdated';
import Footer from './Footer';
import './landing.css';
import Why from './Why';
import 'tailwindcss/tailwind.css';
import vivad from '../../assets/images/vivad se vishvas.jpg'
import khagi from '../../assets/images/khagi mhotosav.jpg'
import join from '../../assets/images/slide3.jpg'

function Landing() { // Change the function name to 'landing'
  const items = [
    <img src={khagi} alt="Slide 1" />,
    <img src={vivad} alt="Slide 2" />,
    <img src={join} alt="Slide 3" />,
    // Add more slides as needed
  ];

  return (
    <>
      <Landnav />
      <CarouselMUI items={items} />
      <Collab />
      <h1 className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12 "
      style={{
        fontSize: '35px', // Equivalent to text-2xl
        color: '#2563EB', // Equivalent to text-indigo-700
        fontWeight: '600', // Equivalent to font-semibold
        color: '#050d38', // Equivalent to text-[#050d38]
        marginBottom: '1.25rem', // Equivalent to mb-5
        textAlign: 'center', // Equivalent to text-center
        marginTop: '3rem', // Equivalent to mt-12
      }}
      
      >Outlet Stores</h1>
      <PopularCategories />
      <h1 className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12"
      style={{
        fontSize: '35px', // Equivalent to text-2xl
        color: '#2563EB', // Equivalent to text-indigo-700
        fontWeight: '600', // Equivalent to font-semibold
        color: '#050d38', // Equivalent to text-[#050d38]
        marginBottom: '1.25rem', // Equivalent to mb-5
        textAlign: 'center', // Equivalent to text-center
        marginTop: '3rem', // Equivalent to mt-12
      }}
      >About Us</h1>
      <AboutUs />
      <Why/>
      <h1 id="features" className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12"
      style={{
        fontSize: '35px', // Equivalent to text-2xl
        color: '#2563EB', // Equivalent to text-indigo-700
        fontWeight: '600', // Equivalent to font-semibold
        color: '#050d38', // Equivalent to text-[#050d38]
        marginBottom: '1.25rem', // Equivalent to mb-5
        textAlign: 'center', // Equivalent to text-center
        marginTop: '3rem', // Equivalent to mt-12
      }}
      >Our Services</h1>
      <Features/>
      <MSME/>
      <StayUpdated/>
      <Footer/>
     
    </>
  );
}

export default Landing; // Export the function as 'landing'

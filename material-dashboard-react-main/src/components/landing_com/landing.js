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

function Landing() { // Change the function name to 'landing'
  const items = [
    <img src="image1.jpg" alt="Slide 1" />,
    <img src="image2.jpg" alt="Slide 2" />,
    <img src="image3.jpg" alt="Slide 3" />,
    // Add more slides as needed
  ];

  return (
    <>
      <Landnav />
      <CarouselMUI items={items} />
      <Collab />
      <h1 className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12">Outlet Stores</h1>
      <PopularCategories />
      <h1 className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12">About Us</h1>
      <AboutUs />
      <h1 id="features" className="text-2xl text-indigo-700 font-semibold text-[#050d38] mb-5 text-center mt-12">Our Services</h1>
      <Features/>
      <MSME/>
      <StayUpdated/>
      <Footer/>
    </>
  );
}

export default Landing; // Export the function as 'landing'

import React from 'react';
import Navbar from './Navbar';
import CarouselMUI from './CarouselMUI';

import './App.css';

function App() {
  const items = [
    <img src="image1.jpg" alt="Slide 1" />,
    <img src="image2.jpg" alt="Slide 2" />,
    <img src="image3.jpg" alt="Slide 3" />,
    // Add more slides as needed
  ];

  return (
    <>
      <Navbar />
      <CarouselMUI items={items} />
    </>
  );
}

export default App;

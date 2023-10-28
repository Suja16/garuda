import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper } from '@mui/material';

const CarouselMUI = ({ items }) => {
  return (
    <Carousel autoPlay>
      {items.map((item, index) => (
        <div key={index}>
          <Paper elevation={3} style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {item}
          </Paper>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMUI;

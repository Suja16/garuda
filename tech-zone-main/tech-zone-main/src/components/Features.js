import React from "react";
import "./Features.css";

const Features = () => {
  const services = [
    {
      title: "Service 1",
      description: "Description of Service 1.",
    },
    {
      title: "Service 2",
      description: "Description of Service 2.",
    },
    {
      title: "Service 3",
      description: "Description of Service 3.",
    },
    {
      title: "Service 4",
      description: "Description of Service 4.",
    },
    // Add more services as needed
  ];

  return (
    <div className="features-benefits-page">
      
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

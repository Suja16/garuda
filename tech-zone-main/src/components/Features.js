import React from "react";
import "./Features.css";

const Features = () => {
  const services = [
    {
      title: "Hassle-free Logistics",
      description: "Efficient logistics solution with a streamline delivery process",
    },
    {
      title: "Multilingual Support",
      description: "Our website provides multilingual support for enhancing user experience and reach",
    },
    {
      title: "Seemless Buisness Interaction",
      description: "Fostering efficient communication and collaboration, promoting productivity and success",
    },
    {
      title: "Regular Updates",
      description: "We provide regular updates on government policies and programs",
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

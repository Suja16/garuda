import React from "react";

const Features = () => {
  const services = [
    {
      title: "Hassle-free Logistics",
      description: "Efficient logistics solution with a streamlined delivery process",
      image: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/truck_blue.png",
    },
    {
      title: "Multilingual Support",
      description: "Our website provides multilingual support for enhancing user experience and reach",
      image: "https://cdn-icons-png.flaticon.com/512/6314/6314107.png",
    },
    {
      title: "Seamless Business Interaction",
      description: "Fostering efficient communication and collaboration, promoting productivity and success",
      image: "https://i.pinimg.com/474x/d8/47/38/d847383837e774904fe277ee13154f8f.jpg",
    },
    {
      title: "Regular Updates",
      description: "We provide regular updates on government policies and programs",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/software-update-installation-icon.png",
    },
  ];

  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        {services.map((service, index) => (
          <div
            className="bg-white border border-gray-300 p-5 rounded-lg shadow-md text-center relative"
            style={{ boxShadow: "0 0 10px #1976d2" }}
            key={index}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 mx-auto -mt-10"
            />
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

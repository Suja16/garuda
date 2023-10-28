// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="p-5 flex flex-col md:flex-row md:justify-center">
//       <div className="about-us-section bg-white border border-gray-300 p-5 rounded-lg shadow-md m-2 flex-1 text-center">
//         <h2 className="text-2xl text-gray-700 mb-5">Part 1</h2>
//         <p className="text-base text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
//           vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
//           mollis, nec tempus odio viverra.
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
//           vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
//           mollis, nec tempus odio viverra.
//         </p>
//       </div>
//       <div className="hidden md:block md:w-1/4">
//         <img src="your-image-source.jpg" alt="Your Image Description" />
//       </div>
//       <div className="about-garuda-section bg-white border border-gray-300 p-5 rounded-lg shadow-md m-2 flex-1 text-center">
//         <h2 className="text-2xl text-gray-700 mb-5">Part 2</h2>
//         <p className="text-base text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
//           vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
//           mollis, nec tempus odio viverra.
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
//           vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
//           mollis, nec tempus odio viverra.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row md:justify-center relative">
      <div className="about-us-section bg-white border border-gray-300 p-5 rounded-lg shadow-md m-2 flex-1 text-center mb-5 md:mb-0 md:mr-2 md:ml-0">
        <h2 className="text-2xl text-gray-700 mb-3 md:mb-5">Part 1</h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
          mollis, nec tempus odio viverra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
          mollis, nec tempus odio viverra.
        </p>
      </div>
      <img
        src="https://image.similarpng.com/very-thumbnail/2022/01/Luxury-gold-eagle-phoenix-logo-design-on-transparent-background-PNG.png"
        alt="Your Image Description"
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ height: "250px", width: "250px", background: "transparent", zIndex: 50 }}
      />
      <div className="about-garuda-section bg-white border border-gray-300 p-5 rounded-lg shadow-md m-2 flex-1 text-center mt-5 md:mt-0 md:ml-2 md:mr-0">
        <h2 className="text-2xl text-gray-700 mb-3 md:mb-5">Part 2</h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
          mollis, nec tempus odio viverra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          vehicula quam. Nulla facilisi. Phasellus elementum nunc sit amet lorem
          mollis, nec tempus odio viverra.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

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
    <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1.25rem",
        borderRadius: "0.375rem",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        margin: "0.3125rem",
        flex: 1,
        textAlign: "center",
        marginBottom: "0.625rem",
        marginRight: "0.625rem",
        marginLeft: "0"
      }}>
        <h2 style={{ fontSize: "1.25rem", color: "#333", marginBottom: "0.9375rem" }}>Part 1</h2>
        <p style={{ fontSize: "1rem", color: "#666" }}>
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
        style={{
          display: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "250px",
          width: "250px",
          background: "transparent",
          zIndex: 50
        }}
      />
      <div style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1.25rem",
        borderRadius: "0.375rem",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        margin: "0.3125rem",
        flex: 1,
        textAlign: "center",
        marginTop: "0.625rem",
        marginLeft: "0.625rem",
        marginRight: "0"
      }}>
        <h2 style={{ fontSize: "1.25rem", color: "#333", marginBottom: "0.9375rem" }}>Part 2</h2>
        <p style={{ fontSize: "1rem", color: "#666" }}>
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

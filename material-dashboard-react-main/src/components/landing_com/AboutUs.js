import React from "react";

const AboutUs = () => {
  return (
    <div style={{ padding: "1.25rem", display: "flex", flexDirection: "row", alignItems: "center" }}>
      <div style={{
        flex: 1, /* Equal height - Set flex to 1 */
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1.25rem",
        borderRadius: "0.375rem",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        margin: "0.3125rem",
        textAlign: "center",
        marginBottom: "0.625rem",
        marginRight: "0.625rem",
        marginLeft: "0"
      }}>
        {/* <h2 style={{ fontSize: "1.25rem", color: "#333", marginBottom: "0.9375rem" }}>Part 1</h2> */}
        <p style={{ fontSize: "1rem", color: "#666" }}>
        We at Garuda are dedicated to redefining how independent merchants, craftspeople, and micro, small, and medium-sized businesses (MSMEs) interact with the world market. Our platform was developed with the goal of removing barriers that businesses of all sizes have historically encountered in the exporting process and making it simple, affordable, and accessible for them to export internationally.
Garuda was established with a thorough grasp of the difficulties that small and growing companies confront in reaching a worldwide audience. 

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
          
        }}
      />
      <div style={{
        flex: 1, /* Equal height - Set flex to 1 */
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1.25rem",
        borderRadius: "0.375rem",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        margin: "0.3125rem",
        textAlign: "center",
        marginTop: "0.625rem",
        marginLeft: "0.625rem",
        marginRight: "0",
        height:'220px',
        paddingTop:'10px'
      }}>
        {/* <h2 style={{ fontSize: "1.25rem", color: "#333", marginBottom: "0.9375rem" }}>Part 2</h2> */}
        <p style={{ fontSize: "1rem", color: "#666" }}>
        We cordially invite you to join us in our effort to realise the full potential of micro, small, and medium-sized enterprises (MSMEs) in the global market. Garuda is your reliable partner whether you are a supplier aiming to increase your market share or a buyer looking for unusual and ethically sourced goods.
Join Garuda now, and together, let us build a world where global exporting is simple, sustainable, and affordable for everyone.
We appreciate you thinking of Garuda as your export and online shopping solution.

        </p>
      </div>
    </div>
  );
};

export default AboutUs;

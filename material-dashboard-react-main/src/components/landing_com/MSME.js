import React from "react";

const MSME = () => {
  return (
    <div className="msme-page p-5 md:p-20 flex flex-col md:flex-row justify-center">
      <div className="about-us-section bg-white border border-gray-300 p-5 md:p-20 rounded-lg shadow-md m-2 md:m-10 text-center">
        <img
          src="https://dnk.cept.gov.in/customers.web/static/img/dnk2.png"
          alt="msme"
          className="msme-image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="about-us-section bg-white border border-gray-300 p-5 md:p-20 rounded-lg shadow-md m-2 md:m-10 text-center">
        <h2 className="section-title text-2xl md:text-3xl text-black mb-5">What do we do?</h2>
        <p className="section-description text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vehicula quam.
          Nulla facilisi. Phasellus elementum nunc sit amet lorem mollis, nec tempus odio viverra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vehicula quam. Nulla facilisi.
          Phasellus elementum nunc sit amet lorem mollis, nec tempus odio viverra.
        </p>
      </div>
    </div>
  );
};

export default MSME;

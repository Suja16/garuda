import React from "react";
import "./StayUpdated.css"; // You can create a new CSS file for this component

const StayUpdated = () => {
  const tweetUrls = [
    "https://twitter.com/IndiaPostOffice/status/1290999120992153601",
    "https://twitter.com/IndiaPostOffice/status/1642115472031354880",
    "https://twitter.com/IndiaPostOffice/status/1666475390062460928",
  ];

  return (
    <div className="stay-updated-scrollable-container">
      <div className="stay-updated-container">
        {tweetUrls.map((url, index) => (
          <iframe
            key={index}
            border="0"
            frameBorder="0"
            height="300"
            width="550"
            src={`https://twitframe.com/show?url=${encodeURIComponent(url)}`}
            title={`India Post ${index}`}
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default StayUpdated;

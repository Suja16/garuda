import React from "react";

const StayUpdated = () => {
  const tweetUrls = [
    "https://twitter.com/IndiaPostOffice/status/1290999120992153601",
    "https://twitter.com/IndiaPostOffice/status/1642115472031354880",
    "https://twitter.com/IndiaPostOffice/status/1666475390062460928",
  ];

  return (
    <div className="stay-updated-scrollable-container w-max-content overflow-y-auto p-10 mx-auto flex flex-row-reverse">
      <div className="stay-updated-container flex flex-col items-center ">
        {tweetUrls.map((url, index) => (
          <iframe
            key={index}
            className="border-0 h-300 w-550 m-4 shadow-md bg-white rounded-4 transition-transform hover:scale-102"
            src={`https://twitframe.com/show?url=${encodeURIComponent(url)}`}
            title={`India Post ${index}`}
          ></iframe>
        ))}
        <div className="see-more mt-8 text-center">
        <button className="see-more-button py-2 px-4 text-lg bg-yellow-500 text-white rounded-md cursor-pointer mt-8">
          See More
        </button>
      </div>
      </div>
    </div>
  );
};

export default StayUpdated;

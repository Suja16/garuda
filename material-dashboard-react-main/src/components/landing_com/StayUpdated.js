import React from "react";

const StayUpdated = () => {
  const tweetUrls = [
    "https://twitter.com/IndiaPostOffice/status/1290999120992153601",
    "https://twitter.com/IndiaPostOffice/status/1642115472031354880",
    "https://twitter.com/IndiaPostOffice/status/1666475390062460928",
  ];

  return (
    <div className="stay-updated-scrollable-container w-max-content overflow-y-auto p-10 mx-auto flex flex-row-reverse"
    style={{
      width: "max-content", /* Equivalent to w-max-content */
      overflowY: "auto", /* Equivalent to overflow-y-auto */
      padding: "2.5rem", /* Equivalent to p-10 */
      margin: "0 auto", /* Equivalent to mx-auto */
      display: "flex",
      flexDirection: "row-reverse", /* Equivalent to flex flex-row-reverse */
      justifyContent: "flex-end", /* Position items to the right */
    }}
    
    
    >
      <div className="stay-updated-container flex flex-col items-center "
      style={{
        display: "flex", /* Equivalent to flex */
        flexDirection: "column", /* Equivalent to flex-col */
        alignItems: "center", /* Equivalent to items-center */
      }}
      >
        {tweetUrls.map((url, index) => (
          <iframe
            key={index}
            className="border-0 h-300 w-550 m-4 shadow-md bg-white rounded-4 transition-transform hover:scale-102"
            style={{
              border: "none", /* Equivalent to border-0 */
              height: "300px", /* Equivalent to h-300 */
              width: "550px", /* Equivalent to w-550 */
              margin: "4px", /* Equivalent to m-4 */
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", /* Equivalent to shadow-md */
              backgroundColor: "white", /* Equivalent to bg-white */
              borderRadius: "0.5rem", /* Equivalent to rounded-4 */
              transition: "transform 0.3s", /* Equivalent to transition-transform */
              "&:hover": {
                transform: "scale(1.02)", /* Equivalent to hover:scale-102 */
              }
            }}
            

            src={`https://twitframe.com/show?url=${encodeURIComponent(url)}`}
            title={`India Post ${index}`}
          ></iframe>
        ))}
        <div className="see-more mt-8 text-center"
        style={{
          marginTop: "2rem", /* Equivalent to mt-8 */
          textAlign: "center", /* Equivalent to text-center */
        }}
        
        >
        <button className="see-more-button py-2 px-4 text-lg bg-yellow-500 text-white rounded-md cursor-pointer mt-8"
        style={{
          paddingTop: "0.5rem", /* Equivalent to py-2 */
          paddingRight: "1rem", /* Equivalent to px-4 */
          paddingBottom: "0.5rem", /* Equivalent to py-2 */
          paddingLeft: "1rem", /* Equivalent to px-4 */
          fontSize: "1.125rem", /* Equivalent to text-lg */
          backgroundColor: "#d3b03d", /* Equivalent to bg-yellow-500 */
          color: "#FFF", /* Equivalent to text-white */
          borderRadius: "0.375rem", /* Equivalent to rounded-md */
          cursor: "pointer",
          marginTop: "2rem", /* Equivalent to mt-8 */
          border:'none'
        }}
        
        >
          See More
        </button>
      </div>
      </div>
    </div>
  );
};

export default StayUpdated;

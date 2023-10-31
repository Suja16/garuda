import React from "react";

const PopularCategories = () => {
  return (
    <div className="popular-categories">
      <div className="category-grid grid grid-cols-1 gap-10 max-w-3/4 mx-auto"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2.5rem', // Equivalent to gap-10
        maxWidth: '75%', // Equivalent to max-w-3/4
        margin: '0 auto', // Equivalent to mx-auto
      }}
      
      >
        
        <div className="category-item relative flex justify-center items-center text-center"
        style={{
          position: 'relative', // Equivalent to relative
          display: 'flex', // Equivalent to flex
          justifyContent: 'center', // Equivalent to justify-center
          alignItems: 'center', // Equivalent to items-center
          textAlign: 'center', // Equivalent to text-center
        }}
        
        >
          <img
            src="https://m.media-amazon.com/images/I/71UCUuRfZZS.jpg"
            alt="Category 1"
            className="category-image"
            style={{ width: "1068px", height: "373px", objectFit: "cover" }}
          />
          <div className="category-item-overlay opacity-0 hover:opacity-100"
          style={{
            opacity: 0, // Equivalent to opacity-0
            '&:hover': {
              opacity: 1, // Equivalent to hover:opacity-100
            },
          }}
          
          >
            Category 1
          </div>
        </div>


        <div className="category-item relative flex justify-center items-center text-center">
          <img
            src="https://burst.shopifycdn.com/photos/tshirts.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            alt="Category 2"
            className="category-image"
            style={{ width: "1068px", height: "373px", objectFit: "cover" }}
          />
          <div className="category-item-overlay opacity-0 hover:opacity-100"
          style={{
            opacity: 0, // Equivalent to opacity-0
            '&:hover': {
              opacity: 1, // Equivalent to hover:opacity-100
            },
          }}
          
          >
            Category 2
          </div>
        </div>

        
        <div className="category-item relative flex justify-center items-center text-center">
          <img
            src="https://www.goldmedalindia.com/blog/wp-content/uploads/2023/05/Which-home-appliances-use-the-most-electricity-new.jpg"
            alt="Category 3"
            className="category-image"
            style={{ width: "1068px", height: "373px", objectFit: "cover" }}
          />
          <div className="category-item-overlay opacity-0 hover:opacity-100"
          style={{
            opacity: 0, // Equivalent to opacity-0
            '&:hover': {
              opacity: 1, // Equivalent to hover:opacity-100
            },
          }}
          
          >
            Category 3
          </div>
        </div>
      </div>
      <div className="see-more mt-8 text-center"
      style={{
        marginTop: "2rem", /* Equivalent to mt-8 */
        textAlign: "center", /* Equivalent to text-center */
      }}
      
      >
        <button className="see-more-button py-2 px-4 text-lg bg-yellow-500 text-white rounded-md cursor-pointer mt-8"
        style={{
          padding: "0.5rem 1rem", /* Equivalent to py-2 px-4 */
          fontSize: "1.125rem", /* Equivalent to text-lg */
          backgroundColor: "#d3b03d", /* Equivalent to bg-yellow-500 */
          color: "#fff", /* Equivalent to text-white */
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
  );
};

export default PopularCategories;

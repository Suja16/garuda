import React from "react";

const PopularCategories = () => {
  return (
    <div className="popular-categories">
      <div className="category-grid grid grid-cols-1 gap-10 max-w-3/4 mx-auto">
        
        <div className="category-item relative flex justify-center items-center text-center">
          <img
            src="https://m.media-amazon.com/images/I/71UCUuRfZZS.jpg"
            alt="Category 1"
            className="category-image"
            style={{ width: "1068px", height: "373px", objectFit: "cover" }}
          />
          <div className="category-item-overlay opacity-0 hover:opacity-100">
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
          <div className="category-item-overlay opacity-0 hover:opacity-100">
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
          <div className="category-item-overlay opacity-0 hover:opacity-100">
            Category 3
          </div>
        </div>
      </div>
      <div className="see-more mt-8 text-center">
        <button className="see-more-button py-2 px-4 text-lg bg-yellow-500 text-white rounded-md cursor-pointer mt-8">
          See More
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;

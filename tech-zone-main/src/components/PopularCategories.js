import React from "react";
import "./PopularCategories.css"; // Create a CSS file for styling

const PopularCategories = () => {
  return (
    <div className="popular-categories">
      <div className="category-grid">
        {/* Image 1 */}
        <div className="category-item">
          <img
            src="https://m.media-amazon.com/images/I/71UCUuRfZZS.jpg"
            alt="Category 1"
            className="category-image"
          />
          <div className="category-text">Category 1</div>
        </div>

        {/* Image 2 */}
        <div className="category-item">
          <img
            src="https://burst.shopifycdn.com/photos/tshirts.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            alt="Category 2"
            className="category-image"
          />
          <div className="category-text">Category 2</div>
        </div>

        {/* Image 3 */}
        <div className="category-item">
          <img
            src="https://www.ghanamma.com/gp/wp-content/uploads/2022/04/Dell-Latitude-9420.jpg"
            alt="Category 3"
            className="category-image"
          />
          <div className="category-text">Category 3</div>
        </div>

        {/* Image 4 */}
        <div className="category-item">
          <img
            src="https://cdn0.weddingwire.in/vendor/7358/3_2/960/jpg/16711707-1391333074239730-4484282615844536022-n_15_67358.jpeg"
            alt="Category 4"
            className="category-image"
          />
          <div className="category-text">Category 4</div>
        </div>

        {/* Image 5 */}
        <div className="category-item">
          <img
            src="https://media.istockphoto.com/id/636191848/photo/dumbbell-and-yoga-mat-on-wood-table.jpg?s=612x612&w=0&k=20&c=SELP8KSRmx2noiRcze_5FAgtR_RlZil84Q4Xo8s9c0Y="
            alt="Category 5"
            className="category-image"
          />
          <div className="category-text">Category 5</div>
        </div>

        {/* Image 6 */}
        <div className="category-item">
          <img
            src="https://c.ndtvimg.com/2021-09/uofkgou8_kitchen-appliances650_625x300_17_September_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?downsize=360:*"
            alt="Category 6"
            className="category-image"
          />
          <div className="category-text">Category 6</div>
        </div>
      </div>
      <div className="see-more">
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};

export default PopularCategories;

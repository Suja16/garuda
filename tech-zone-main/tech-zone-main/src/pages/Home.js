import Slider from "../components/Slider";
import Features from "../components/Features";
import "../components/Home.css";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <h1 className="centered-h1">Popular Categories</h1>
      <PopularCategories/>
      <h1 className="centered-h1">Our Services</h1>
      <Features />
      

    </div>
  );
};

export default Home;

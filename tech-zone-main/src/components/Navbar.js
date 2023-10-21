// import { Link, NavLink } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   const { cartItems } = useSelector((state) => state.carts);
//   const NavActive = ({ isActive }) => {
//     return {
//       color: isActive ? "#f9fafb" : null,
//     };
//   };

//   return (
//     <div className="navbar bg-gray-700 text-violet-50 h-20 flex items-center justify-center">
//       <nav className="container mx-auto px-10  sm:flex-row flex-col  flex justify-between items-center">
//         <div className="nav-left">
//           <Link to={"/"}>
//             <h2 className="brand text-2xl text-violet-50 italic font-semibold  ">
//               <span className="text-rose-500">Garuda</span>
//             </h2>
//           </Link>
//         </div>
//         <SearchBar/>
//         <div className="nav-right">
//           <ul className="nav-links flex gap-5 items-center">
//             <li>
//               <NavLink
//                 className="text-gray-300 font-normal hover:text-gray-400 duration-300"
//                 style={NavActive}
//                 end
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="text-gray-300 font-normal hover:text-gray-400 duration-300"
//                 style={NavActive}
//                 to={"/products"}
//               >
//                 Products
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/cart" className="relative group">
//                 <span>
//                   <BsCart3 />
//                   <span className=" absolute bottom-2 text-sm left-2 bg-rose-500 h-5 w-5 flex items-center justify-center rounded-full group-hover:bg-sky-500 duration-300">
//                     {cartItems.length}
//                   </span>
//                 </span>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { FaBell,FaPhone } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const scrollToPopularCategories = () => {
    const popularCategoriesSection = document.getElementById("popular-categories");
    if (popularCategoriesSection) {
      popularCategoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar bg-#1976d2 text-violet-50 h-20 flex items-center justify-center custom-nav-one-height">
        <nav className="container mx-auto px-10 sm:flex-row flex-col flex justify-between items-center">
          <div className="nav-left">
            <div className="logo-container flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDGbkvs1jyPz-himCSBwBTYbWyE8ihumpDkHtmkE8BQ2xakUqHYnAvpiBaH6q0vUyrf8&usqp=CAU"
                alt="Ashoka Logo"
                className="logo-image"
              />
              <img
                src="Images_/logo.png"
                alt="Garuda Logo"
                className="brand logo-image"
              />
            </div>
          </div>
          <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
            <span
              className="text-xl font-semibold ml-4"
              style={{ cursor: "pointer" }}
              onClick={scrollToPopularCategories}
            >
              Categories
            </span>
            <span className="mx-4 text-white-500">|</span>
            <span className="text-xl font-semibold ml-4" style={{ cursor: "pointer" }} onClick={scrollToFeatures}>
              Features & Benefits
            </span>
            <span className="mx-4 text-white-500">|</span>
            <span className="text-xl font-semibold ml-4">
              <FaBell className="mr-2" />
            </span>
            <span className="mx-4 text-white-500">|</span>
            <span className="text-xl font-semibold ml-4">+91 XXXX XXXX 99 </span>
            <span className="text-xl font-semibold ml-4">
              <FaPhone className="mr-2" />
            </span>
          </div>
          <div className="nav-right">
            <ul className="nav-links flex gap-5 items-center">
              <li>
                <a
                  href="/signup"
                  className="text-white-300 font-normal hover:text-gray-400 duration-300"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-white-300 font-normal hover:text-gray-400 duration-300"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


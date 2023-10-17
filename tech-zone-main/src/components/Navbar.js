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
import { FaSearch, FaBell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
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
              {/* <h2 className="brand text-2xl text-violet-50 italic font-semibold">
                <span className="text-rose-500">Garuda</span>
              </h2> */}
              <img
                src="Images_/logo.png"
                alt="Garuda Logo"
                className="brand logo-image"
              />
            </div>
          </div>
          <div className="nav-center">
            <div
              className="search-bar bg-white flex items-center px-4 rounded-md"
              style={{ width: "617px", height: "45px" }}
            >
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Search..."
              />
              <span className="ml-2 text-gray-500">
                <FaSearch />
              </span>
            </div>
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

      <div className="bg-#1976d2 text-white py-2 text-center flex justify-start custom-border-nav-two">
        <span className="text-xl font-semibold ml-auto" style={{ marginLeft: "150px" }}>
          Categories
        </span>
        <div className="ml-auto flex items-center" style={{ marginRight: "150px" }}>
          <span className="text-xl font-semibold">Features & Benefits</span>
          <span className="mx-4 text-white-500">|</span>
          <span className="text-xl font-semibold">View Contracts</span>
          <span className="mx-4 text-white-500">|</span>
          <span className="text-xl font-semibold">
            <FaBell className="mr-2" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




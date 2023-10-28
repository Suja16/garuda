

// import React, { useState } from "react";
// import { FaBell, FaPhone } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const scrollToPopularCategories = () => {
//     const popularCategoriesSection = document.getElementById("popular-categories");
//     if (popularCategoriesSection) {
//       popularCategoriesSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToFeatures = () => {
//     const featuresSection = document.getElementById("features");
//     if (featuresSection) {
//       featuresSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       <div className="navbar bg-#1976d2 text-violet-50 sm:h-20 h-32 flex items-center justify-center custom-nav-one-height" style={{ backgroundColor: "#1976d2" }}>
//         <nav className="container mx-auto px-5 sm:px-10 sm:flex-row flex-col flex justify-between items-center">
//           <div className="nav-left">
//             <div className="logo-container flex items-center">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDGbkvs1jyPz-himCSBwBTYbWyE8ihumpDkHtmkE8BQ2xakUqHYnAvpiBaH6q0vUyrf8&usqp=CAU"
//                 alt="Ashoka Logo"
//                 className="w-12 h-12 sm:w-16 sm:h-16 logo-image"
//               />
//               <img
//                 src="Images_/logo.png"
//                 alt="Garuda Logo"
//                 className="w-12 h-12 sm:w-16 sm:h-16 brand logo-image"
//               />
//             </div>
//           </div>
//           <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
//             <div className="hidden sm:flex">
//               <span
//                 className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
//                 style={{ cursor: "pointer" }}
//                 onClick={scrollToPopularCategories}
//               >
//                 Categories
//               </span>
//               <span className="mx-2 sm:mx-4 text-white-500">|</span>
//               <span
//                 className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
//                 style={{ cursor: "pointer" }}
//                 onClick={scrollToFeatures}
//               >
//                 Features & Benefits
//               </span>
//               <span className="mx-2 sm:mx-4 text-white-500">|</span>
//               <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">
//                 <FaBell className="mr-1 sm:mr-2" />
//               </span>
//               <span className="mx-2 sm:mx-4 text-white-500">|</span>
//               <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">+91 XXXX XXXX 99 </span>
//               <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">
//                 <FaPhone className="mr-1 sm:mr-2" />
//               </span>
//             </div>
//             <div className="sm:hidden ml-auto">
//               <button onClick={() => setShowNav(!showNav)} className="text-xl sm:text-2xl font-semibold ml-2 sm:ml-4">
//                 ☰
//               </button>
//             </div>
//           </div>
//           <div className="nav-right">
//             <ul className={`nav-links flex gap-3 sm:gap-5 items-center ${showNav ? "flex flex-col" : "hidden"}`}>
//               <li>
//                 <a
//                   href="/signup"
//                   className="text-white-300 font-normal hover:text-gray-400 duration-300"
//                 >
//                   Sign Up
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/login"
//                   className="text-white-300 font-normal hover:text-gray-400 duration-300"
//                 >
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

import "./Navbar.css";

const Landnav = () => {
  const [showNav, setShowNav] = useState(false);

  

  // const scrollToPopularCategories = () => {
  //   const popularCategoriesSection = document.getElementById("popular-categories");
  //   if (popularCategoriesSection) {
  //     popularCategoriesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar bg-#1976d2 text-violet-50 sm:h-20 h-32 flex items-center justify-center custom-nav-one-height" style={{ backgroundColor: "#1976d2" }}>
        <nav className="container mx-auto px-5 sm:px-10 sm:flex-row flex-col flex justify-between items-center">
          <div className="nav-left">
            <div className="logo-container flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDGbkvs1jyPz-himCSBwBTYbWyE8ihumpDkHtmkE8BQ2xakUqHYnAvpiBaH6q0vUyrf8&usqp=CAU"
                alt="Ashoka Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 logo-image"
              />
              <img
                src="Images_/logo.png"
                alt="Garuda Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 brand logo-image"
              />
            </div>
          </div>
          <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
            <div className="hidden sm:flex"
            style={{paddingLeft:"100px"}}>
              <span
                className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
                style={{ cursor: "pointer" }}
                
              >
                Why Garuda
              </span>
              {/* <span className="mx-2 sm:mx-4 text-white-500">|</span> */}
              <span
                className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
                style={{ cursor: "pointer", marginLeft:"50px"}}
                
              >
                How does it Work
              </span>
              {/* <span className="mx-2 sm:mx-4 text-white-500">|</span> */}
              <span
                className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
                style={{ cursor: "pointer", marginLeft:"50px" }}
                onClick={scrollToFeatures}
                
              >
                Our Services
              </span>
              {/* <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">
                <FaBell className="mr-1 sm:mr-2" />
              </span>
              <span className="mx-2 sm:mx-4 text-white-500">|</span>
              <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">+91 XXXX XXXX 99 </span>
              <span className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4">
                <FaPhone className="mr-1 sm:mr-2" />
              </span> */}
            </div>
            <div className="sm:hidden ml-auto">
              <button onClick={() => setShowNav(!showNav)} className="text-xl sm:text-2xl font-semibold ml-2 sm:ml-4">
                ☰
              </button>
            </div>
          </div>
          <div className={`nav-right ${showNav ? "block" : "hidden"} sm:flex sm:block`}>
            <ul className="nav-links flex gap-3 sm:gap-5 items-center">
                <li>
                  <a
                    href="/signup"
                    className="text-white-300 font-normal hover:text-gray-400 duration-300"
                    style={{ background: "white", color: "#1976d2", padding: "10px" }}
                  >
                    Sign Up
                  </a>
                </li>

                <li>
                  <a
                    href="/login"
                    className="text-white-300 font-normal hover:text-gray-400 duration-300"
                    style={{ padding: "10px", border: "2px solid white", borderColor: "white" }}
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

export default Landnav;

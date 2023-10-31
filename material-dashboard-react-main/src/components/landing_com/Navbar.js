



// import React, { useState } from "react";

// const Landnav = () => {
//   const [showNav, setShowNav] = useState(false);

//   const scrollToFeatures = () => {
//     const featuresSection = document.getElementById("features");
//     if (featuresSection) {
//       featuresSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       <div className="navbar" style={{ backgroundColor: "#1976d2", color: "violet" }}>
//         <nav
//           className="container mx-auto px-5 sm:px-10 sm:flex-row flex-col flex justify-between items-center"
//         >
//           <div className="nav-left">
//             <div className="logo-container flex items-center">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDGbkvs1jyPz-himCSBwBTYbWyE8ihumpDkHtmkE8BQ2xakUqHYnAvpiBaH6q0vUyrf8&usqp=CAU"
//                 alt="Ashoka Logo"
//                 style={{
//                   width: "12rem",
//                   height: "12rem",
//                 }}
//               />
//               <img
//                 src="Images_/logo.png"
//                 alt="Garuda Logo"
//                 style={{
//                   width: "12rem",
//                   height: "12rem",
//                 }}
//               />
//             </div>
//           </div>
//           <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
//             <div className="hidden sm:flex" style={{ paddingLeft: "100px" }}>
//               <span
//                 className="text-xl"
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   marginLeft: "2rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 Why Garuda
//               </span>
//               <span
//                 className="text-xl"
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   marginLeft: "50px",
//                   cursor: "pointer",
//                 }}
//               >
//                 How does it Work
//               </span>
//               <span
//                 className="text-xl"
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   marginLeft: "50px",
//                   cursor: "pointer",
//                 }}
//                 onClick={scrollToFeatures}
//               >
//                 Our Services
//               </span>
//             </div>
//             <div className="sm:hidden ml-auto">
//               <button
//                 onClick={() => setShowNav(!showNav)}
//                 style={{
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   marginLeft: "2rem",
//                 }}
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//           <div className={`nav-right ${showNav ? "block" : "hidden"}`}>
//             <ul className="nav-links flex gap-3 sm:gap-5 items-center">
//               <li>
//                 <a
//                   href="/signup"
//                   style={{
//                     color: "white",
//                     background: "white",
//                     padding: "10px",
//                     color: "#1976d2",
//                   }}
//                 >
//                   Sign Up
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/login"
//                   style={{
//                     padding: "10px",
//                     border: "2px solid white",
//                     borderColor: "white",
//                   }}
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

// export default Landnav;

import React, { useState } from "react";
import garudaLogo from '../../assets/images/logos/garuda_logo.png';
import postlogo from '../../assets/images/logos/post_logo.png'
import { Link, useHistory } from "react-router-dom";


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
      <div className="navbar" style={{
        backgroundColor: '#1976d2',
        color: 'violet',
        height: '4.75rem', // 20px for sm and 32px for default
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
         // Custom height value
      }}>
        <nav className="container" style={{
                    margin: '0 auto',
                    padding: '0.625rem', // 5px
                    display: 'flex',
                    flexDirection: 'row', // Change to 'row'
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '1300px',
                    height: '150px'
                  }}
            >
          <div className="nav-left" >
            <div className="logo-container" style={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <img
                src={postlogo}
                alt="Ashoka Logo"
                className=" logo-image" style={{
                  width: '7vw',  
                  height: '80px',
                }}
              />
              <img
                src={garudaLogo}
                alt="Garuda Logo"
                className="logo-image" style={{
                  width: '7vw',  
                  height: '80px',
                }}
              />
            </div>
          </div>
          <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
            <div className="hidden sm:flex"
            style={{paddingLeft:"10px"}}>
              <span
                className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
                style={{  cursor: "pointer",
                color: 'white', // Set the text color to white
                fontSize: '25px', // Equivalent to text-lg
                fontWeight: '600', // Equivalent to font-semibold
                marginRight: '20px', // Equivalent to ml-2
                '@media (min-width: 640px)': {
                  fontSize: '1.25rem', // Equivalent to sm:text-xl
                  marginLeft: '1rem', // Equivalent to sm:ml-4
                }}}
                
              >
                Why Garuda
              </span>
              {/* <span className="mx-2 sm:mx-4 text-white-500">|</span> */}
              <Link
  to="/info"
  className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
  style={{
    cursor: "pointer",
    marginLeft: "50px",
    fontSize: "25px",
    fontWeight: "600",
    color: "white",
    '@media (min-width: 640px)': {
      fontSize: "1.25rem",
      marginLeft: "1rem",
    },
  }}
>
  How does it Work
</Link>

              {/* <span className="mx-2 sm:mx-4 text-white-500">|</span> */}
              <span
                className="text-lg sm:text-xl font-semibold ml-2 sm:ml-4"
                style={{ cursor: "pointer", marginLeft:"50px", fontSize: '25px', // Equivalent to text-lg
                fontWeight: '600',
                color:'white', // Equivalent to font-semibold
                //marginRight: '20px', // Equivalent to ml-2
                '@media (min-width: 640px)': {
                  fontSize: '1.25rem', // Equivalent to sm:text-xl
                  marginRight: '1rem', // Equivalent to sm:ml-4
                } }}
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
          </div>
          <div className={"nav-right sm:flex sm:block"} style={{display: 'block', marginRight:'30px', // Equivalent to sm:block
  '@media (min-width: 640px)': {
    display: 'flex' // Display as flex on screens wider than 640px (sm breakpoint)
  }
}}>
            <ul className="nav-links flex gap-3 sm:gap-5 items-center" style={{
  display: 'flex',
  gap: '0.75rem', // Equivalent to gap-3
  alignItems: 'center',
  '@media (min-width: 640px)': {
    gap: '1.25rem', // Equivalent to sm:gap-5
  }
}}>
                <li>
                  <a
                    href="/signup"
                    className="text-white-300 font-normal hover:text-gray-400 duration-300"
                    style={{padding: "10px",
                    fontWeight: '400', // Equivalent to font-normal
                    color:'#1976d2',
                    backgroundColor:'white',
                    '&:hover': {
                      color: '#ccc', // Equivalent to hover:text-gray-400
                      transition: 'color 0.3s', // Equivalent to duration-300
                    }
                   }}
                  >
                    Sign Up
                  </a>
                </li>

                <li>
                  <a
                    href="/login"
                    className="text-white-300 font-normal hover:text-gray-400 duration-300"
                    style={{ padding: "10px", border: "2px solid white", borderColor: "white", color: '#fff', // Equivalent to text-white-300
                    fontWeight: '400', // Equivalent to font-normal
                    '&:hover': {
                      color: '#ccc', // Equivalent to hover:text-gray-400
                      transition: 'color 0.3s', // Equivalent to duration-300
                    }
                   }}
                  >
                    Login
                  </a>
                  <a
                    href="https://garuda-buyer.vercel.app/"
                    className="text-white-300 font-normal hover:text-gray-400 duration-300"
                    style={{ padding: "10px", border: "2px solid white", borderColor: "white", color: '#fff',marginLeft:"2vw", // Equivalent to text-white-300
                    fontWeight: '400', // Equivalent to font-normal
                    '&:hover': {
                      color: '#ccc', // Equivalent to hover:text-gray-400
                      transition: 'color 0.3s', // Equivalent to duration-300
                    }
                   }}
                  >
                    Login as buyer
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


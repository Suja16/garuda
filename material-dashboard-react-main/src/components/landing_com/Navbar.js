



import React, { useState } from "react";

const Landnav = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: "#1976d2", color: "violet" }}>
        <nav
          className="container mx-auto px-5 sm:px-10 sm:flex-row flex-col flex justify-between items-center"
        >
          <div className="nav-left">
            <div className="logo-container flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDGbkvs1jyPz-himCSBwBTYbWyE8ihumpDkHtmkE8BQ2xakUqHYnAvpiBaH6q0vUyrf8&usqp=CAU"
                alt="Ashoka Logo"
                style={{
                  width: "12rem",
                  height: "12rem",
                }}
              />
              <img
                src="Images_/logo.png"
                alt="Garuda Logo"
                style={{
                  width: "12rem",
                  height: "12rem",
                }}
              />
            </div>
          </div>
          <div className="nav-center" style={{ display: "flex", alignItems: "center" }}>
            <div className="hidden sm:flex" style={{ paddingLeft: "100px" }}>
              <span
                className="text-xl"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginLeft: "2rem",
                  cursor: "pointer",
                }}
              >
                Why Garuda
              </span>
              <span
                className="text-xl"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginLeft: "50px",
                  cursor: "pointer",
                }}
              >
                How does it Work
              </span>
              <span
                className="text-xl"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginLeft: "50px",
                  cursor: "pointer",
                }}
                onClick={scrollToFeatures}
              >
                Our Services
              </span>
            </div>
            <div className="sm:hidden ml-auto">
              <button
                onClick={() => setShowNav(!showNav)}
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginLeft: "2rem",
                }}
              >
                ☰
              </button>
            </div>
          </div>
          <div className={`nav-right ${showNav ? "block" : "hidden"}`}>
            <ul className="nav-links flex gap-3 sm:gap-5 items-center">
              <li>
                <a
                  href="/signup"
                  style={{
                    color: "white",
                    background: "white",
                    padding: "10px",
                    color: "#1976d2",
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  style={{
                    padding: "10px",
                    border: "2px solid white",
                    borderColor: "white",
                  }}
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

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import './ContactUs.css';
const containerStyle = {
  marginTop: "50px", 
};

const formStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const labelStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
  
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const submitStyle = {
  width: "100%",
  padding: "15px",
  backgroundColor: "#49a3f1",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const sectionStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const sectionTextStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
};

const linkStyle = {
  color: "#0066c0", 
  textDecoration: "underline",
  cursor: "pointer",
};

function ContactUs() {
  
  const [userInfo, setUserInfo] = useState({
    fullName: "Devadas Kumar",
    mobile: "(91) 9821 8452 00",
    email: "devadas@mail.com",
    location: "INDIA",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox style={containerStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MDBox mb={3}>
              <h2>Contact Us</h2>
              <div style={formStyle}>
                <form className="contactus" onSubmit={handleSubmit}>
                  <label style={labelStyle} htmlFor="name">
                    Enter Name
                  </label>
                  <input
                    style={inputStyle}
                    type="text"
                    id="name"
                    name="name"
                    value={userInfo.fullName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, fullName: e.target.value })
                    }
                  />

                  <label style={labelStyle} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    style={inputStyle}
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />

                  <label style={labelStyle} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    style={{ ...inputStyle, height: "120px" }}
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                  />

                  <button style={submitStyle} type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </MDBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MDBox mb={3}>
              <h2>Contact Information</h2>
              <div style={sectionStyle}>
                <p style={sectionTextStyle}>
                  <strong>Full Name:</strong> {userInfo.fullName}
                  <br />
                  <strong>Mobile:</strong> {userInfo.mobile}
                  <br />
                  <strong>Email:</strong> {userInfo.email}
                  <br />
                  <strong>Location:</strong> {userInfo.location}
                </p>
              </div>

              
              <div style={sectionStyle}>
                <h2>Report Something Suspicious</h2>
                <p style={sectionTextStyle}>
                  If you encounter any suspicious activity, please{" "}
                  <span style={linkStyle}>report it here</span>.
                </p>
              </div>

              
              <div style={sectionStyle}>
                <h2>Accessibility</h2>
                <p style={sectionTextStyle}>
                  We are committed to making our website accessible to all. Learn
                  more about our{" "}
                  <span style={linkStyle}>accessibility features</span>.
                </p>
              </div>

              
              <div style={sectionStyle}>
                <h2>Address Security</h2>
                <p style={sectionTextStyle}>
                  Your security is important to us. Read about our{" "}
                  <span style={linkStyle}>address security measures</span>.
                </p>
              </div>

              
              <div style={sectionStyle}>
                <h2>Privacy Options</h2>
                <p style={sectionTextStyle}>
                  Explore your{" "}
                  <span style={linkStyle}>privacy options</span> and control your
                  personal information.
                </p>
              </div>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ContactUs;

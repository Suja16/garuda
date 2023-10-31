const Footer = () => {
    const email = "garuda123@gmail.com";
    const contactNumber = "+91 XXXX XXXX 99";
  
    const footerStyle = {
      backgroundColor: "#1976d2",
      color: "#FFFFFF", /* Equivalent to text-white-50 */
  textAlign: "center", /* Equivalent to text-center */
  padding: "2.5rem",
    };
  
    return (
      <footer className="footer text-white-50 text-center py-10" style={footerStyle}>
        <div>
          &copy; {new Date().getFullYear()} Garuda. All Rights Reserved
        </div>
        <div>
          Email: <a style={{color:'white'}} href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          Contact No: {contactNumber}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
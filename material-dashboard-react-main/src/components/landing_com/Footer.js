const Footer = () => {
    const email = "garuda123@gmail.com";
    const contactNumber = "+91 XXXX XXXX 99";
  
    const footerStyle = {
      backgroundColor: "#1976d2",
    };
  
    return (
      <footer className="footer text-violet-50 text-center py-10" style={footerStyle}>
        <div>
          &copy; {new Date().getFullYear()} Garuda. All Rights Reserved
        </div>
        <div>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          Contact No: {contactNumber}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
import React from "react";

const MSME = () => {
  return (
    <div className="msme-page p-5 md:p-20 flex flex-col md:flex-row justify-center"
    style={{
      padding: "1.25rem", /* Equivalent to p-5 */
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      '@media (min-width: 768px)': {
        padding: "1.25rem 5rem", /* Equivalent to p-5 md:p-20 */
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft:'800px'
      }
    }}
    
    >
      <div className="about-us-section bg-white border border-gray-300 p-5 md:p-20 rounded-lg shadow-md m-2 md:m-10 text-center"
      style={{
        backgroundColor: 'white', /* Equivalent to bg-white */
        border: '1px solid #ccc', /* Equivalent to border border-gray-300 */
        padding: '1.25rem', /* Equivalent to p-5 */
        borderRadius: '0.375rem', /* Equivalent to rounded-lg */
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', /* Equivalent to shadow-md */
        margin: '0.3125rem', /* Equivalent to m-2 */
        textAlign: 'center',
        marginLeft:'250px',
        '@media (min-width: 768px)': {
          padding: '5rem', /* Equivalent to md:p-20 */
          margin: '2.5rem', /* Equivalent to md:m-10 */
          height:'400px',
          width:'500px',
          
        }
      }}
      
      >
        <img
          src="https://dnk.cept.gov.in/customers.web/static/img/dnk2.png"
          alt="msme"
          className="msme-image"
          style={{ width: "100%", height: "265px", }}
        />
      </div>
      <div className="about-us-section bg-white border border-gray-300 p-5 md:p-20 rounded-lg shadow-md m-2 md:m-10 text-center"
      style={{
        backgroundColor: 'white', /* Equivalent to bg-white */
        border: '1px solid #ccc', /* Equivalent to border border-gray-300 */
        padding: '1.25rem', /* Equivalent to p-5 */
        borderRadius: '0.375rem', /* Equivalent to rounded-lg */
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', /* Equivalent to shadow-md */
        margin: '0.3125rem', /* Equivalent to m-2 */
        textAlign: 'center',
        '@media (min-width: 768px)': {
          padding: '5rem', /* Equivalent to md:p-20 */
          margin: '2.5rem', /* Equivalent to md:m-10 */
        }
      }}
      
      >
        <h2 className="section-title text-2xl md:text-3xl text-black mb-5"
        style={{
          fontSize: '1.5rem', /* Equivalent to text-2xl */
          '@media (min-width: 768px)': {
            fontSize: '1.875rem', /* Equivalent to md:text-3xl */
          },
          color: 'black', /* Equivalent to text-black */
          marginBottom: '1.25rem', /* Equivalent to mb-5 */
        }}
        
        >Who Are We?</h2>
        <p className="section-description text-gray-600 text-base"
        style={{
          color: '#718096', /* Equivalent to text-gray-600 */
          fontSize: '1rem', /* Equivalent to text-base */
          width:'600px'
        }}
        
        >
          We are a dedicated team of visionaries, technology enthusiasts, and trade experts who are on a mission to revolutionize global exporting.
driven to help micro, small, and medium-sized enterprises (MSMEs) rule the world market. At Garuda, we firmly believe that every company, regardless of size, should have the chance to succeed on the global market. At our core, we believe that every business, big or small, should have the opportunity to reach international markets with ease. What sets us apart is our unwavering commitment to making this vision a reality through a strategic collaboration with Dak Ghar Niryat Kendra (DNK).

        </p>
      </div>
    </div>
  );
};

export default MSME;

import React from "react";

const Collab = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row md:justify-center"
    style={{
      padding: '1.25rem', /* Equivalent to p-5 */
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'center', /* Equivalent to md:justify-center */
        
      }
    }}
    
    >
      <div className="collab-with-dnk bg-white border border-gray-300 p-5 rounded-lg shadow-md m-2 flex-1 text-center"
      style={{
        backgroundColor: 'white', // Equivalent to bg-white
        border: '1px solid #d1d5db', // Equivalent to border border-gray-300
        padding: '1.25rem', // Equivalent to p-5
        borderRadius: '0.5rem', // Equivalent to rounded-lg
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Equivalent to shadow-md
        margin: '0.5rem', // Equivalent to m-2
        flex: '1',
        textAlign: 'center', // Equivalent to text-center
        height:'480px',
        width:'900px',
        marginLeft:'275px'
      }}
      
      >
        <h1 className="text-2xl text-indigo-700 font-semibold text-[#1976d2] mb-5"
        style={{
          fontSize: '35px', // Equivalent to text-2xl
          color: '#667EEA', // Equivalent to text-indigo-700
          fontWeight: '600', // Equivalent to font-semibold
          color: '#1976d2', // Equivalent to text-[#1976d2]
          marginBottom: '1.25rem', // Equivalent to mb-5
        }}
        
        >Collaboration With DNK</h1>
        <p className="text-base text-gray-600"
        style={{
          fontSize: '1rem', // Equivalent to text-base
          color: '#6B7280', // Equivalent to text-gray-600
        }}
        
        >
          Garuda's pivotal strength is its strategic partenership with Dak Ghar Niryat Kendra (DNK),
          an initiativeby the Department of Posts and CBIC, which stets to aim apart in the e-
          commerce sector. They've established a network of 122 Dak Ghar Niryat Kendras,
          simplifying the export porcess and reducing the need for costly web portals. Garuda's
          commitment extends to opening an additional 878 DNKs in the next two years, enhancing
          accessibility for MSMEs and small to medium sized businesses. This partnership eliminates
          the burden of regularity and e-commerce platform compliance, ensuring
          trust and dependability while reducing costs. Together, Garuda and DNK are reshaping 
          international exporting with technology and collaboration, making global markets more accessible
          for buisness.
        </p>
      </div>
    </div>
  );
}

export default Collab;

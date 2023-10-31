import React from "react";

const Why = () => {
  const services = [
    {
      title: "•	DNK Integration & Streamlined exporting:",
      description: "At Garuda, we've revolutionized the export process, offering a cost-effective and reliable solution for sellers and buyers. Our partnership with Dak Ghar Niryat Kendra (DNK) streamlines export through electronic Portal Bills of Export and our extensive DNK center network. Say goodbye to complex web portals and regulatory challenges.",
    },
    {
      title: "•	Cost-effective and Trustworthy",
      description: "Garuda offers an affordable and trustworthy marketplace with a rigorous seller verification system, ensuring a safe and secure shopping experience for buyers.",
    },
    {
      title: "•	Compliance made easy",
      description: "Garuda simplifies export regulations and compliance, providing confidence to sellers and assuring buyers that products meet international standards.",
    },
    {
      title: "•	Sustainable and Ethical Trade:",
      description: "If you're passionate about ethical and sustainable trade, Garuda is your platform. We empower businesses like yours to showcase eco-friendly and fair trade products, allowing buyers to discover items that not only reflect quality but also a commitment to a better world.",
    },
    {
      title: "•	Cutting-edge Technology",
      description: "At Garuda, innovation is more than just a buzzword; it's our way of life. Our features, including blockchain-backed supply chain transparency, 3D printing customization, and AI-driven personalization, redefine your shopping experience, making it efficient and highly personalized",
    },
    {
      title: "•	Global Expansion",
      description: "Garuda, with a global vision, provides buyers with a treasure map to uncover unique products worldwide. Explore diverse markets, connect with a wide array of sellers, and transform your global dreams into exciting purchases.",
    },
    {
      title: "",
      description: "",
    },
    {
        title: "•	Education and Support",
        description: "We're more than a marketplace; we're your gateway to international success. Access our educational resources and training to master international trade. ",
      },
  ];

  return (
    <div
    style={{
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        padding: "0.75rem", // Adjust the padding as desired
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      
      
    >
        <h1 
        style={{
            fontSize: '35px', // Equivalent to text-2xl
            color: '#2563EB', // Equivalent to text-indigo-700
            fontWeight: '600', // Equivalent to font-semibold
            color: '#050d38', // Equivalent to text-[#050d38]
            marginBottom: '1.25rem', // Equivalent to mb-5
            textAlign: 'center', // Equivalent to text-center
            marginTop: '3rem', // Equivalent to mt-12
          }}
        >Why Garuda?</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1.25rem",
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "1.25rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "black",
                marginBottom: "0.75rem",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                color: "gray",
                opacity: "0.6",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;

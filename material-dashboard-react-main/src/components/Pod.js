import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const containerStyle = {
  marginTop: "50px",
};

const sectionStyle = {
  backgroundColor: "#f7f7f7",
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

const podcastStyle = {
  backgroundColor: "#f7f7f7",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

function Pod() {
  const podcasts = [
    {
      title: "Workshop on E-Commerce Exports & Dak Ghar Niryat Kendra (DGNK)",
      host: "Tamil Nadu Postal Circle",
      date: "18th July, 2023",
      description: "Watch this YouTube video:",
      youtubeEmbed: (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DBFK8_5GH1w?si=9zea1AG3RuqeNx8K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox style={containerStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox mb={3}>
              <h2>Podcasts</h2>
              {podcasts.map((podcast, index) => (
                <div key={index} style={podcastStyle}>
                  <h3>{podcast.title}</h3>
                  <p>
                    <strong>Host:</strong> {podcast.host}
                    <br />
                    <strong>Date:</strong> {podcast.date}
                  </p>
                  <p>{podcast.description}</p>
                  {podcast.youtubeEmbed}
                </div>
              ))}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Pod;

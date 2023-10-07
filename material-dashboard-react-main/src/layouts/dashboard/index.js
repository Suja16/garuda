// ok

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import imgSrc from "../../assets/images/modi.png";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import './dashboard.css'



const currentDate = new Date();
const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <img src={imgSrc} alt="Narendra MOdi-PM India" style={{ width: '100%', height: '270px', borderRadius: '10px',}} />
        </MDBox>
        </Grid>
                <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} style={{ padding: '16px', width: '100%', height: '50%', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'scroll' }}>
              {/* Scrollable content */}
              <Typography variant="h6" gutterBottom>
                Welcome back
              </Typography>
              <Typography variant="body1" paragraph>
                Dak Ghar Nirayat Kendra is your destination for excellence in postal services and comprehensive import-export solutions. Trust in our commitment to secure and efficient mail and package deliveries, along with streamlined global logistics, all underpinned by our unwavering dedication to sustainable practices.
              </Typography>
            </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <a href="https://dnk.cept.gov.in/customers.web/" target="_blank" rel="noopener noreferrer">
              <Button variant="contained" color="primary" style={{ color: 'white' }}>
                  Learn More
                </Button>
              </a>
            </div>
          </Paper>
        </Grid>

        <Grid container spacing={3}>
  <Grid item xs={12} md={6} lg={6}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            icon="leaderboard"
            title="Total Order"
            count="2,300"
            percentage={{
              color: "success",
              amount: "+3%",
              label: "than last month",
            }}
          />
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="success"
            icon="store"
            title="Revenue"
            count="34k"
            percentage={{
              color: "success",
              amount: "+1%",
              label: "than yesterday",
            }}
          />
        </MDBox>
      </Grid>
    </Grid>
  </Grid>

  <Grid item xs={12} md={6} lg={6}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="primary"
            icon="person_add"
            title="review"
            count="1000"
            percentage={{
              color: "success",
              amount: " 4.1",
              label: "overall rating",
            }}
          />
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="dark"
            icon="weekend"
            title="Pending-order"
            count={281}
            percentage={{
              color: "success",
              amount: "+55",
              label: "than last week",
            }}
          />
        </MDBox>
      </Grid>
    </Grid>
  </Grid>
</Grid>
</Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="orders per day"
                  date={`${formattedDate}`}
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="overall growth"
                  description="total earning in the platform per month"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
export default Dashboard;

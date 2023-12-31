/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// ok

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Order ID", accessor: "author", width: "45%", align: "left" },
      { Header: "last scanned at", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "ETA", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author name="#23nkcqjd00" email="john@creative-tim.com" />,
        function: <Job title="LOCAL PO" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="IN TRANSIT" color="sky blue" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#23nuii9z00" email="alexa@creative-tim.com" />,
        function: <Job title="DNK PO" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="LEFT FOR CO" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#23iy6g3g00" email="laurent@creative-tim.com" />,
        function: <Job title="DNK PO" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="LEFT FOR CO" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#2369rihc00" email="michael@creative-tim.com" />,
        function: <Job title="CUSTOMS OFFICE" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="UNDER PROCESS" color='yellow' variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#23pn3iz300" email="richard@creative-tim.com" />,
        function: <Job title="CUSTOMS OFFICE" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="LEFT FOR PORT" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#2308bl0100" email="miriam@creative-tim.com" />,
        function: <Job title="CUSTOMS OFFICE" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="CUSTOMS DECLINED" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#23a7zd6000" email="miriam@creative-tim.com" />,
        function: <Job title="AT PORT" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="TO BE SHIPPED" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
      {
        author: <Author name="#23ah55w00" email="miriam@creative-tim.com" />,
        function: <Job title="AT PORT" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="SHIPPED" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INVOICE
          </MDTypography>
        ),
      },
    ],
  };
}

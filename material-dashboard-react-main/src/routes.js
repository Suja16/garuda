
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Cover from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import { ContactPhone, Podcasts } from "@mui/icons-material";
import ProductForm from "components/ProductForm";
import KYCForm from "components/KYCForm";
import ContactUs from "components/ContactUs";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "KYC Registration",
    key: "kyc-registration",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/kyc-registration",
    component: <KYCForm/>,
  },
  {
    type: "collapse",
    name: " Add Product ",
    key: "add-product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/add-product",
    component: <ProductForm />,
  },
  {
    type: "collapse",
    name: " Product Listed ",
    key: "product-listed",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "product-listed",
    
  },
  {
    type: "collapse",
    name: "Orders",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Bank details",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Contact Us",
    key: "contact-us",
    icon: <Icon fontSize="small">call-support</Icon>,
    route: "contact-us",
    component: <ContactUs  />,
  },
  {
    type: "collapse",
    name: "Podcasts",
    key: "podcasts",
    icon: <Icon fontSize="small">podcasts</Icon>,
    route: "podcasts",
    component: <Podcasts  />,
  },
];

export default routes;

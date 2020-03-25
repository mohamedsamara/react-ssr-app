import Homepage from "../components/Homepage";
import Page404 from "../components/404";

const routes = [
  { path: "/", exact: true, name: "Homepage", component: Homepage },
  { path: "*", component: Page404 }
];

export default routes;

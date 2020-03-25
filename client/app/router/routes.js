import Homepage from "../components/Homepage";
import Test from "../components/Test";
import Page404 from "../components/404";

const routes = [
  { path: "/", exact: true, name: "Homepage", component: Homepage },
  { path: "/test", name: "Test", component: Test },
  { path: "*", component: Page404 }
];

export default routes;

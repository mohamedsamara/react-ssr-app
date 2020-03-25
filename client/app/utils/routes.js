import Homepage from "../components/Homepage";
import Test from "../components/Test";

const routes = [
  { path: "/", exact: true, name: "Homepage", component: Homepage },
  { path: "/test", name: "Test", component: Test }
];

export default routes;

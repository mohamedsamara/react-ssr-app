import Homepage from '../components/Homepage';
import About from '../components/About';
import Page404 from '../components/404';

const routes = [
  { path: '/', exact: true, name: 'Homepage', component: Homepage },
  { path: '/about', name: 'About', component: About },
  { path: '*', component: Page404 },
];

export default routes;

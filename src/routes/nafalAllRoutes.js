import HomeNafal from '../pages/Nafal/pages/home/Home';
import ServicesNafal from '../pages/Nafal/pages/services/Services';
import AboutUsNafal from '../pages/Nafal/pages/about/about';
import ContactUsNafal from '../pages/Nafal/pages/contact/Contact';
import AppComingSoon from '../pages/Nafal/components/comingsoon/AppComingSoon';
import Dashboard from '../pages/Nafal/pages/dashboard/Dashboard';
import Login from '../pages/Nafal/pages/login/Login';

const routes = [
   // Nafal Project
  { path: '/', component: HomeNafal ,isWithoutLayout: false },
  { path: '/services', component: ServicesNafal ,isWithoutLayout: false },
  { path: '/about', component: AboutUsNafal ,isWithoutLayout: false },
  { path: '/contact-us', component: ContactUsNafal ,isWithoutLayout: false },
  { path: "/app-comingsoon", component: AppComingSoon ,isWithoutLayout: true },
  { path: "/admin/dashboard", component: Dashboard ,isWithoutLayout: true },
  { path: "/admin/login", component: Login ,isWithoutLayout: true },
];

export default routes;
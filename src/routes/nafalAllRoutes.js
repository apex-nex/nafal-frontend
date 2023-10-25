import HomeNafal from '../pages/Nafal/pages/home/Home';
import ServicesNafal from '../pages/Nafal/pages/services/Services';
import AboutUsNafal from '../pages/Nafal/pages/about/about';
import ContactUsNafal from '../pages/Nafal/pages/contact/Contact';

const routes = [
   // Nafal Project
  { path: '/', component: HomeNafal },
  { path: '/services', component: ServicesNafal },
  { path: '/about', component: AboutUsNafal },
  { path: '/contact-us', component: ContactUsNafal },
];

export default routes;
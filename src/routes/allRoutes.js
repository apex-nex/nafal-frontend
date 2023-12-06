import React from 'react'
import { Redirect } from "react-router-dom";

import HomeNafal from '../pages/Nafal/pages/home/Home';
import ServicesNafal from '../pages/Nafal/pages/services/Services'
import AboutUsNafal from '../pages/Nafal/pages/about/about'
import ContactUsNafal from '../pages/Nafal/pages/contact/Contact'
import AppComingSoon from '../pages/comingsoon/AppComingSoon';
import Dashboard from '../pages/Nafal/pages/dashboard/Dashboard';
import Login from '../pages/Nafal/pages/login/Login';

const routes = [
  //Nafal routes without Layout
  // { path: "/index-forums", component: Forums, isTopbarDark: true, isWithoutLayout: true },
  { path: "/app-comingsoon", component: AppComingSoon, isWithoutLayout: true },
  { path: "/admin/dashboard", component: Dashboard, isWithoutLayout: true },
  { path: "/admin/login", component: Login, isWithoutLayout: true },



  // Nafal routes with Layout
  { path: '/', component: HomeNafal, isWithoutLayout: false },
  { path: '/services', component: ServicesNafal, isWithoutLayout: false },
  { path: '/about', component: AboutUsNafal, isWithoutLayout: false },
  { path: '/contact', component: ContactUsNafal, isWithoutLayout: false },

  //Index Main
  // { path: "/", exact: true, component: () => <Redirect to="/index" />},
  // { path: "/index", component: Main, isTopbarDark: true },
];



export default routes;

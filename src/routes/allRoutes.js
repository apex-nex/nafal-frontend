import React from 'react'
import { Redirect } from "react-router-dom";

import HomeNafal from '../pages/home/Home';
import ServicesNafal from '../pages/services/Services'
import AboutUsNafal from '../pages/about/about'
import ContactUsNafal from '../pages/contact/Contact'
import AppComingSoon from '../pages/comingsoon/AppComingSoon';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import PageError from '../pages/error/PageError';
import Logout from '../pages/logout/Logout';
import PagePrivacy from '../pages/privacy/PagePrivacy';
import PageTerms from '../pages/terms/PageTerms';

const routes = [
  //Nafal routes without Layout
  { path: "/app-comingsoon", component: AppComingSoon, isWithoutLayout: true },
  { path: "/admin/dashboard", dashboard: true, component: Dashboard, isWithoutLayout: true },
  { path: "/admin/login", login: true, component: Login, isWithoutLayout: true },
  { path: "/admin/logout", component: Logout, isWithoutLayout: true },


  // Nafal routes with Layout
  { path: '/', component: HomeNafal, isWithoutLayout: false },
  { path: '/services', component: ServicesNafal, isWithoutLayout: false },
  { path: '/about', component: AboutUsNafal, isWithoutLayout: false },
  { path: '/contact', component: ContactUsNafal, isWithoutLayout: false },
  { path: '/privacy', component: PagePrivacy, isWithoutLayout: false },
  { path: '/terms', component: PageTerms, isWithoutLayout: false },


  // Nafal 404 page
  { path: "*", component: PageError, isWithoutLayout: true },


  //Index Main
  // { path: "/", exact: true, component: () => <Redirect to="/index" />},
  // { path: "/index", component: Main, isTopbarDark: true },
];



export default routes;

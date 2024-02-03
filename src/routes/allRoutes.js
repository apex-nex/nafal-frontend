import React from 'react'
import Home from '../pages/home/Home';
import About from '../pages/about/about';
import Services from '../pages/services/Services';
import Contact from '../pages/contact/Contact';
import PagePrivacy from "../pages/Utility/PagePrivacy";
import PageTerms from "../pages/Utility/PageTerms";
import PageError from "../pages/Special/PageError";
import AppComingSoon from '../pages/Special/AppComingSoon';
import PageLogin from "../pages/AuthPages/PageLogin";
import Dashboard from "../pages/admin/Dashboard";
import Logout from '../pages/AuthPages/Logout';

const routes = [
  //routes with Layout
  { path: "/", component: <Home /> },
  { path: "/about-us", component: <About /> },
  { path: "/services", component: <Services /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "/privacy", component: <PagePrivacy /> },
  { path: "/terms", component: <PageTerms /> },

  //routes without Layout
  { path: "/app-comingsoon", component: <AppComingSoon />, isWithoutLayout: true },
  { path: "*", component: <PageError />, isWithoutLayout: true },

  // Auth Routes
  { path: "/auth-login", component: <PageLogin />, isWithoutLayout: true, },
  { path: "/auth-logout", component: <Logout />, isWithoutLayout: true },
  { path: "/admin-dashboard", component: <Dashboard /> },

];

export default routes;

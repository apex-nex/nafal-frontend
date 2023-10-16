import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';
import FeatherIcon from 'feather-icons-react';
import RightSidebar from '../../components/Layout/RightSidebar';
import { Offcanvas } from 'reactstrap';

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('right');

  const toggleRightDrawer = () => {
    setPosition('right');
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const isToogleMenu = () => {
    const isToggle = document.getElementById('isToggle');
    if (isToggle) {
      isToggle.classList.toggle('open');
      var isOpen = document.getElementById('navigation');
      if (isOpen.style.display === 'block') {
        isOpen.style.display = 'none';
      } else {
        isOpen.style.display = 'block';
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.querySelector('.shoppingbtn').classList.remove('btn-light');
    }, 200);
    document.body.classList = '';
    document.querySelector('.shoppingbtn').classList.add('btn-primary');
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector('.shoppingbtn').classList.remove('btn-light');
      document.querySelector('.settingbtn').classList.remove('btn-light');
      document.querySelector('.shoppingbtn').classList.add('btn-primary');
      document.querySelector('.settingbtn').classList.add('btn-soft-primary');
    } else {
      document.querySelector('.shoppingbtn').classList.add('btn-primary');
      document
        .querySelector('.settingbtn')
        .classList.remove('btn-soft-primary');
      document.querySelector('.settingbtn').classList.add('btn-light');
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          {props.isLight ? (
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} height="24" className="l-dark" alt="" />
                <img src={logoLight} height="24" className="l-light" alt="" />
              </span>
              <img
                src={logoLight}
                height="24"
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          ) : (
            <Link className="logo" to="/">
              <img
                src={logoDark}
                height="24"
                className="logo-light-mode"
                alt=""
              />
              <img
                src={logoLight}
                height="24"
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          )}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={isToogleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
              <Link to="#" onClick={toggleRightDrawer}>
                <div
                  id="buyButton"
                  className="btn btn-icon btn-pills btn-light settingbtn"
                >
                  <FeatherIcon icon="settings" className="fea icon-sm" />
                </div>
              </Link>
            </li>{' '}
            <li className="list-inline-item ps-1 mb-0">
              <Link to="//1.envato.market/landrickreactjs" target="_blank">
                <div
                  id="buyButton"
                  className="btn btn-icon btn-pills btn-primary shoppingbtn"
                >
                  <FeatherIcon icon="user" className="fea icon-sm" />
                </div>
              </Link>
            </li>
          </ul>

          <div id="navigation">
            <ul
              className={
                props.isLight
                  ? 'navigation-menu  nav-light nav-right'
                  : 'navigation-menu nav-right'
              }
            >
              <li>
                <Link to="/index-crypto" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/crypto-about" className="sub-menu-item">
                  {' '}
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/crypto-market" className="sub-menu-item">
                  Market
                </Link>
              </li>
              <li>
                <Link to="/crypto-token" className="sub-menu-item">
                  {' '}
                  Token
                </Link>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                {/* ... (Nested menu content) ... */}
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Offcanvas isOpen={open} direction="end" toggle={toggleRightDrawer}>
        <RightSidebar onClose={onDrawerClose} />
      </Offcanvas>
    </React.Fragment>
  );
};

export default NavBar;

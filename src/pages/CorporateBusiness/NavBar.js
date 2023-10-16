import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

// Import Icons
import FeatherIcon from 'feather-icons-react';
import RightSidebar from '../../../src/components/Layout/RightSidebar';
import { Offcanvas } from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('right');

  const toggleRightDrawer = () => {
    setPosition('right');
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const initMenu = () => {
    activateMenu();
  };

  const activateMenu = () => {
    // ... (Remaining logic from the activateMenu function)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    initMenu();
    document.body.classList = '';
    document.querySelectorAll('#buyButton').forEach((navLink) => {
      navLink.classList.add('btn-light');
      navLink.classList.remove('btn-soft-primary');
    });
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
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.querySelector('.shoppingbtn').classList.remove('btn-primary');
      document
        .querySelector('.settingbtn')
        .classList.remove('btn-soft-primary');
      document.querySelector('.shoppingbtn').classList.add('btn-light');
      document.querySelector('.settingbtn').classList.add('btn-light');
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  const isToogleMenu = () => {
    const isToggle = document.getElementById('isToggle');
    if (isToggle) {
      isToggle.classList.toggle('open');
      var isOpen = document.getElementById('navigation');
      console.log('navgiationId', isOpen);
      if (isOpen.style.display === 'block') {
        isOpen.style.display = 'none';
      } else {
        isOpen.style.display = 'block';
      }
    }
  };

  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <div>
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="24" alt="" />
                <img src={logoLight} className="l-light" height="24" alt="" />
              </span>
              <img
                src={logoLight}
                height="24"
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          </div>
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
              <Link to="#" onClick={toggleRightDrawer} disabled={open}>
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                    <FeatherIcon icon="settings" className="fea icon-sm" />
                  </span>
                </div>
              </Link>
              <Link to="#" onClick={toggleRightDrawer} disabled={open}>
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light shoppingbtn">
                    <FeatherIcon icon="settings" className="fea icon-sm" />
                  </span>
                </div>
              </Link>
            </li>{' '}
            <li className="list-inline-item ps-1 mb-0 shoppingbtn">
              <Link to="//1.envato.market/landrickreactjs" target="_blank">
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-primary shoppingbtn">
                    <FeatherIcon icon="shopping-cart" className="fea icon-sm" />
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <FeatherIcon icon="shopping-cart" className="fea icon-sm" />
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <div id="navigation">
            <ul className="navigation-menu nav-light">
              <li><Link to="/index-corporate" className="sub-menu-item">Home</Link></li>
              <li><Link to="/corporate-about" className="sub-menu-item"> About Us</Link></li>
              <li><Link to="/corporate-services" className="sub-menu-item">Services</Link></li>
              <li className="has-submenu parent-menu-item-sub">
                <Link to="#">Pages</Link><span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li><Link to="/corporate-team" className="sub-menu-item"> Team</Link></li>
                    <li><Link to="/corporate-pricing" className="sub-menu-item">Pricing</Link></li>
                    <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li><Link to="/corporate-blog" className="sub-menu-item"> Blog </Link></li>
                        <li><Link to="/corporate-blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                      </ul>
                    </li>
                  </ul>
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

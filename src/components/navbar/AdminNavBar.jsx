import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  Modal,
  ModalBody,
} from 'reactstrap';

//import images
import logoDark from '../../assets/images/nafal/logo/nafal-logo.png';
import logoLight from '../../assets/images/nafal/logo/nafal-logo.png';

//Import Icons
import FeatherIcon from 'feather-icons-react';

function AdminNavBar(props) {
  const [dropdownOpenShop, setDropdownOpenShop] = useState(false);
  const [wishlistModal, setWishlistModal] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownShop = () => {
    setDropdownOpenShop(!dropdownOpenShop);
  };

  const toggleWishlistModal = () => {
    setWishlistModal(prevState => !prevState);
  };

  const toggleDropdownIsOpen = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const topNav = document.getElementById('topnav');
    const settingBtn = document.querySelector('.settingbtn');
    if (top > 80) {
      topNav.classList.add('nav-sticky');
      settingBtn.classList.add('btn-primary');
    } else {
      topNav?.classList.remove('nav-sticky');
      settingBtn?.classList.add('btn-primary');
      settingBtn?.classList.remove('btn-soft-primary');
    }
  };

  const isToggleMenu = () => {
    const isToggle = document.getElementById('isToggle');
    isToggle.classList.toggle('open');
    const isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    initMenu();
    document.body.classList = '';
    window.addEventListener('scroll', scrollNavigation, true);
    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, [props.type]);

  const initMenu = () => {
    activateMenu();
  };

  const activateMenu = () => {
    const menuItems = document.getElementsByClassName('sub-menu-item');
    if (menuItems) {
      let matchingMenuItem = null;
      for (let idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        const immediateParent = matchingMenuItem.closest('li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }
        const parent = matchingMenuItem.closest('.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          const parentOfParent = parent.closest('.parent-menu-item-sub');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          } else {
            const parentOfParent = parent.closest('.parent-menu-item-sub');
            if (parentOfParent) {
              parentOfParent.classList.add('active');
            }
          }
        }
      }
    }
  };

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <Link className="logo" to="/">
            <img src={logoDark} height="24" className="logo-light-mode" alt="" />
            <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={isToggleMenu}
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
            <li className="list-inline-item mb-0 pe-1">
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <Link
                  to="#"
                  className="btn btn-icon btn-pills btn-primary"
                  onClick={() => {
                    toggleFullscreen()
                  }}
                  data-toggle="fullscreen"
                >
                  <i className="mdi mdi-fullscreen" />
                </Link>
              </div>
            </li>{" "}
            <li className="list-inline-item mb-0">
              <Dropdown color="primary" isOpen={dropdownIsOpen} toggle={toggleDropdownIsOpen}>
                <DropdownToggle
                  type="button"
                  color="primary"
                  id="buyButton"
                  className="btn btn-icon btn-pills settingbtn"
                >
                  <FeatherIcon icon="user" className="icons" />
                </DropdownToggle>
                <DropdownMenu
                  direction="start"
                  className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                  style={{ width: '200px' }}
                >
                  <Link className="dropdown-item" to="/admin/logout">
                    <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                    Logout
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <Link to="/index-shop" className="sub-menu-item">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop-aboutus" className="sub-menu-item">
                  {' '}
                  Contact Form
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </header>
      <Modal
        isOpen={wishlistModal}
        tabIndex="-1"
        centered
        contentClassName="rounded shadow-lg border-0 overflow-hidden"
        toggle={toggleWishlistModal}
      >
        <ModalBody className="py-5">
          <div className="text-center">
            <div
              className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
              style={{ height: '95px', width: '95px' }}
            >
              <h1 className="mb-0">
                <i className="uil uil-heart-break align-middle"></i>
              </h1>
            </div>
            <div className="mt-4">
              <h4>Your wishlist is empty.</h4>
              <p className="text-muted">
                Create your first wishlist request...
              </p>
              <div className="mt-4">
                <Link to="#" className="btn btn-outline-primary">
                  + Create new wishlist
                </Link>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default AdminNavBar;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoDark from "../../assets/images/logo/nafal-logo.png";
import logoLight from "../../assets/images/logo/nafal-logo.png";
import { menuItems } from '../../data';
import { useAuth } from '../../store/auth';
import { menuItemsArabic } from '../../data/indexArabic';

const Navbar = (props) => {
  const { isArabic, isDarkMode, toggleDarkMode } = useAuth()
  const data = isArabic ? menuItems : menuItemsArabic

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("topnav");
      const shoppingBtn = document.querySelector(".shoppingbtn");
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (navBar) {
        if (top > 80) {
          navBar.classList.add("nav-sticky");
        } else {
          navBar.classList.remove("nav-sticky");
          if (shoppingBtn) {
            shoppingBtn.classList.add("btn-primary");
            shoppingBtn.classList.remove("btn-light");
          }
        }
      }
    };

    window.scrollTo(0, 0);
    document.body.classList = "";
    const shoppingBtn = document.querySelector(".shoppingbtn");
    if (shoppingBtn) {
      shoppingBtn.classList.add("btn-primary");
      shoppingBtn.classList.remove("btn-light");
    }
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [window.location.href]);

  useEffect(() => {
    activateMenu();
  }, [window.location.href]);

  const activateMenu = () => {
    const data = document.getElementsByClassName("sub-menu-item");

    // Remove 'active' class from all menu items
    for (let i = 0; i < data.length; i++) {
      data[i].classList.remove('active');
      const immediateParent = data[i].closest('li');
      if (immediateParent) {
        immediateParent.classList.remove('active');
      }
      const parent = data[i].closest(".parent-menu-item");
      if (parent) {
        parent.classList.remove('active');
      }
    }

    // Add 'active' class to the matching menu item
    let matchingMenuItem = null;
    for (let idx = 0; idx < data.length; idx++) {
      if (data[idx].href === window.location.href) {
        matchingMenuItem = data[idx];
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active');
      const immediateParent = matchingMenuItem.closest('li');
      if (immediateParent) {
        immediateParent.classList.add('active');
      }
      const parent = matchingMenuItem.closest(".parent-menu-item");
      if (parent) {
        parent.classList.add('active');
      }
    }

    // Close the mobile menu
    hideToggleMenu();
  };


  const isToggleMenu = () => {
    const isToggle = document.getElementById("isToggle");
    if (isToggle) {
      isToggle.classList.toggle("open");
      const isOpen = document.getElementById('navigation');
      if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
      } else {
        isOpen.style.display = "block";
      }
    }
  };

  const hideToggleMenu = () => {
    const isToggle = document.getElementById("isToggle");
    const isOpen = document.getElementById('navigation');

    if (isToggle && isOpen) {
      isToggle.classList.remove("open");
      isOpen.style.display = "none";
    }
  };

  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          {props.isLight ?
            <Link className="logo m-0" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} height="24" className="l-dark" alt="" />
                <img src={logoLight} height="24" className="l-light" alt="" />
              </span>
              <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
            </Link>
            :
            <Link className="logo m-0" to="/">
              <img src={logoDark} height="24" className="logo-light-mode" alt="Etqan Nafal" />
              <img src={logoLight} height="24" className="logo-dark-mode" alt="Etqan Nafal" />
            </Link>
          }
          <div className="menu-extras">
            <div className="menu-item">
              <Link to="#" className="navbar-toggle" id="isToggle" onClick={isToggleMenu}>
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
              {!isArabic ?
                <>
                  <Link to={'#'}
                    onClick={() => {
                      {
                        localStorage.setItem("arabicMode", true)
                        window.location.reload();
                      }
                    }}
                  >
                    <div className="login-btn-primary">
                      <span className="btn btn-icon btn-pills btn-soft-primary">
                        EN
                      </span>
                    </div>
                  </Link>
                  <Link to={'#'}
                    onClick={() => {
                      {
                        localStorage.setItem("arabicMode", true)
                        window.location.reload();
                      }
                    }}
                  >
                    <div className="login-btn-light">
                      <span className="btn btn-icon btn-pills btn-light">
                        EN
                      </span>
                    </div>
                  </Link>
                </>
                :
                <>
                  <Link to={'#'} onClick={() => {
                    localStorage.removeItem("arabicMode");
                    window.location.reload();
                  }}>
                    <div className="login-btn-primary">
                      <span className="btn btn-icon btn-pills btn-soft-primary">
                        AR
                      </span>
                    </div>
                  </Link>
                  <Link to={'#'} onClick={() => {
                    localStorage.removeItem("arabicMode");
                    window.location.reload();
                  }}>
                    <div className="login-btn-light">
                      <span className="btn btn-icon btn-pills btn-light">
                        AR
                      </span>
                    </div>
                  </Link>
                </>
              }
            </li>{" "}
            <li className="list-inline-item mb-0">
              {isDarkMode ?
                <>
                  <Link to={'#'}
                    onClick={() => {
                      localStorage.removeItem("isDarkMode");
                      window.location.reload();
                    }}
                  >
                    <div className="login-btn-primary">
                      <span className="btn btn-icon btn-pills btn-soft-primary">
                        <i className="bx bx-sun" />
                      </span>
                    </div>
                  </Link>
                  <Link to={'#'}
                    onClick={() => {
                      localStorage.removeItem("isDarkMode");
                      window.location.reload();
                    }}
                  >
                    <div className="login-btn-light">
                      <span className="btn btn-icon btn-pills btn-light">
                        <i className="bx bx-sun" />
                      </span>
                    </div>
                  </Link>
                </>
                :
                <>
                  <Link to={'#'} onClick={() => toggleDarkMode(true)}>
                    <div className="login-btn-primary">
                      <span className="btn btn-icon btn-pills btn-soft-primary">
                        <i className="bx bx-moon" />
                      </span>
                    </div>
                  </Link>
                  <Link to={'#'} onClick={() => toggleDarkMode(true)}>
                    <div className="login-btn-light">
                      <span className="btn btn-icon btn-pills btn-light">
                        <i className="bx bx-moon" />
                      </span>
                    </div>
                  </Link>
                </>
              }
            </li>{" "}
            <li className="list-inline-item mb-0" id="buyButton">
              <Link
                to={'https://api.whatsapp.com/send/?phone=966510149313&text&app_absent=0'}
                target="_blank" rel="noopener noreferrer">
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-soft-primary">
                    <i className="mdi mdi-whatsapp" />
                  </span>
                </div>
              </Link>
              <Link
                to={'https://api.whatsapp.com/send/?phone=966510149313&text&app_absent=0'}
                target="_blank" rel="noopener noreferrer">
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <i className="mdi mdi-whatsapp" />
                  </span>
                </div>
              </Link>
            </li>{" "}
            <li className="list-inline-item ps-1 mb-0">
              <Link to="tel:+966510149313">
                <div className="login-btn-primary">
                  <span className="btn btn-icon btn-pills btn-primary">
                    <i className="mdi mdi-phone" />
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <i className="mdi mdi-phone" />
                  </span>
                </div>
              </Link>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu">
              {data.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="sub-menu-item">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

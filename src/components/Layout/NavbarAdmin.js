import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import logo from '../../assets/images/logo/nafal-logo.png';
import FeatherIcon from 'feather-icons-react';
import { useAuth } from "../../store/auth"

function NavbarAdmin(props) {
    const { user } = useAuth()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userData, setUserData] = useState({ name: "User" })
    const [flag, setFlag] = useState(true)

    if (flag && user) {
        setUserData(user)
        setFlag(false)
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const scrollNavigation = () => {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        const topNav = document.getElementById('topnav');
        if (top > 80) {
            topNav.classList.add('nav-sticky');
        } else {
            topNav?.classList.remove('nav-sticky');
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
            <header id="topnav" className="defaultscroll sticky bg-light">
                <div style={{ padding: "0 24px" }}>
                    <Link className="logo" to="/">
                        <img src={logo} height="24" className="logo-light-mode" alt="Nafal" />
                    </Link>
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item mb-0 pe-1">
                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <div
                                    className="text-muted font-size-16"
                                    onClick={() => { toggleFullscreen() }}
                                    data-toggle="fullscreen"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <FeatherIcon
                                        icon="maximize"
                                        className="fea fea-social"
                                    />
                                </div>
                            </div>
                        </li>{" "}
                        <li className="list-inline-item mb-0">
                            <Dropdown color="primary" isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle
                                    className="text-muted font-size-16"
                                    color="white"
                                >
                                    <FeatherIcon icon="user" className="icons" />
                                    <span className="d-none d-xl-inline-block ms-2 me-1" >
                                        {`Hi ${userData.name}`}
                                    </span>
                                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block" ></i>
                                </DropdownToggle>
                                <DropdownMenu
                                    direction="start"
                                    className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                                    style={{ width: '200px' }}
                                >
                                    <Link className="dropdown-item" to="/auth-logout">
                                        <i className="uil uil-sign-out-alt align-middle me-1"></i>{' '}
                                        Logout
                                    </Link>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    );
}

export default NavbarAdmin;

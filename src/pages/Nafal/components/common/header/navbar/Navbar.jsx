import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Container} from 'reactstrap';


//Import Images
import logodark from '../../../../../../assets/images/logo-dark.png';

const navItems = [
  { id: 1, idnm: "/", navheading: "Home" },
  { id: 2, idnm: "/about", navheading: "About" },
  { id: 3, idnm: "/services", navheading: "Services" },
  { id: 4, idnm: "/contact-us", navheading: "Contact" },
]

const Navbar = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <Container>
          <div>
            <Link className="logo" to="#">
              <img src={logodark} height="24" alt="" />
            </Link>
          </div>
            <div id="navigation" style={{ display: 'block' }}>
              <ul className="navigation-menu">
                {navItems.map((item, key) => (
                  <li
                    key={key}
                    className={
                      item.navheading === 'Home'
                        ? 'has-submenu active'
                        : 'has-submenu'
                    }
                  >
                    <Link key={key} to={item?.idnm}> {item?.navheading}</Link>
                  </li>
                ))}
              </ul>
            </div>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

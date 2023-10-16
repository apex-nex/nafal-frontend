import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import FeatherIcon from "feather-icons-react";

import RightSidebar from '../../components/Layout/RightSidebar';
import { Offcanvas, OffcanvasBody } from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            position: 'end',
            isOffcanvasOpen: false
        };
        this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
    }

    toggleOffcanvas = () => {
        this.setState((prevState) => ({
          isOffcanvasOpen: !prevState.isOffcanvasOpen,
        }));
    };
    
    closeOffcanvas = () => {
        this.setState({ isOffcanvasOpen: false });
    };
    

    toggleRightDrawer = () => {
        this.setState({ position: 'right' });
        this.setState({ open: !this.state.open });
    };
    onDrawerClose = () => {
        this.setState({ open: false });
    };

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

    initMenu() {
        this.activateMenu();
    }

    render() {

        const { isOffcanvasOpen } = this.state;

        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <div className="container">
                        {this.props.isLight ?
                            <Link className="logo" to="/">
                                <span className="logo-light-mode">
                                    <img src={logoDark} height="24" className="l-dark" alt="" />
                                    <img src={logoLight} height="24" className="l-light" alt="" />
                                </span>
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                            :
                            <Link className="logo" to="/">
                                <img src={logoDark} height="24" className="logo-light-mode" alt="" />
                                <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
                            </Link>
                        }

                        <ul className="buy-button list-inline mb-0">
                            <li className="list-inline-item mb-0">
                                <Link to="#" onClick={this.toggleOffcanvas}>
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                                        <FeatherIcon
                                            icon="settings"
                                            className="fea icon-sm"
                                        /></div>
                                </Link>
                            </li>{" "}

                            <li className="list-inline-item ps-1 mb-0">
                                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                                    <div id="buyButton" className="btn btn-icon btn-pills btn-primary shoppingbtn">
                                        <FeatherIcon
                                            icon="shopping-cart"
                                            className="fea icon-sm"
                                        /></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>

                <Offcanvas isOpen={isOffcanvasOpen} direction={this.state.position} toggle={this.toggleOffcanvas}>
                    <OffcanvasBody>
                        <RightSidebar onClose={this.closeOffcanvas} />
                    </OffcanvasBody>
                </Offcanvas>
            </React.Fragment>
        );
    }
}

export default NavBar;
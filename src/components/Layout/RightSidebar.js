import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

import logodark from "../../assets/images/logo/nafal-logo.png";
import logolight from "../../assets/images/logo/nafal-logo.png";
import { useAuth } from '../../store/auth';

const RightSidebar = ({ onClose }) => {
    const { isDarkMode, toggleDarkMode } = useAuth();

  const onCloseRightBar = () => {
    onClose();
  };


  return (
    <>
      <div className="offcanvas-header p-4 border-bottom">
        <h5 id="offcanvasRightLabel" className="mb-0">
          <img src={logodark} height="24" className="light-version" alt="" />
          <img src={logolight} height="24" className="dark-version" alt="" />
        </h5>
        <button
          type="button"
          onClick={onCloseRightBar}
          className="btn-close d-flex align-items-center text-dark"
        ></button>
      </div>
      <div className="bg-light border p-3 pt-2 pb-2">
        <h3 className="title text-center pt-3 mb-0">Theme Option</h3>
        <div className="text-center">
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2`}
            style={{background: isDarkMode ? '#dfe6e9' : '#32c2ec'}}
            onClick={() => {
              localStorage.removeItem("mode");
              window.location.replace('/');
            }}
          >
            Light
          </Button>
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2`}
            style={{background: isDarkMode ? '#32c2ec' : '#2c3e50' }}
            onClick={() => toggleDarkMode(true)}
          >
            Dark
          </Button>
        </div>
      </div>
    </>
  );
};

RightSidebar.propTypes = {
  onClose: PropTypes.func,
};

export default RightSidebar;

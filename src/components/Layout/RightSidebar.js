import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

import logodark from "../../assets/images/logo/nafal-logo.png";
import logolight from "../../assets/images/logo/nafal-logo.png";
import { useAuth } from '../../store/auth';

const RightSidebar = ({ onClose }) => {
  const { isArabic, toggleArabic, isDarkMode, toggleDarkMode } = useAuth();

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
      </div>
      <div className="bg-light border p-3 pt-2 pb-2">
        <h3 className="title text-center pt-3 mb-0">Theme Option</h3>
        <div className="text-center">
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2 ${isDarkMode ? 'btn-dark' : 'btn-primary'}`}
            onClick={() => {
              localStorage.removeItem("isDarkMode");
              window.location.reload();
            }}
            disabled={!isDarkMode}
          >
            Light
          </Button>
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2 ${isDarkMode ? 'btn-primary' : 'btn-dark' }`}
            onClick={() => {
              toggleDarkMode(true)
              onCloseRightBar()
            }}
            disabled={isDarkMode}
          >
            Dark
          </Button>
        </div>
      </div>
      <div className="bg-light border p-3 pt-2 pb-2">
        <h3 className="title text-center pt-3 mb-0">Language Option</h3>
        <div className="text-center">
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2 ${isArabic ? 'btn-dark' : 'btn-primary'}`}
            onClick={() => {
              localStorage.removeItem("arabicMode");
              window.location.reload();
            }}
            disabled={!isArabic}
          >
            English
          </Button>
          <Button
            to="#"
            className={`btn btn-sm w-100 mt-2 ${isArabic ? 'btn-primary' : 'btn-dark' }`}
            onClick={() => {
              toggleArabic(true);
              onCloseRightBar();
            }}
            disabled={isArabic}
          >
            Arabic
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

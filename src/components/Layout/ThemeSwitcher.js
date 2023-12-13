import React, { useState } from "react";
import { Link } from "react-router-dom";

const ThemeSwitcher = ({ toggleDarkMode }) => {
  const [isSwitchToggle, setSwitchToggle] = useState(false);

  const toggleSwitcher = () => {
    setSwitchToggle(!isSwitchToggle);
  };

  return (
    <>
      <div
        id="style-switcher"
        style={{ left: isSwitchToggle ? "0px" : "-189px" }}
        className="bg-light border p-3 pt-2 pb-2"
      >
        <h3 className="title text-center pt-3 mb-0">Theme Option</h3>
        <div className="text-center">
          <Link to="#" id="lightButton" className="btn btn-sm w-100 btn-light mt-2" onClick={toggleDarkMode}>
            Light
          </Link>
          <Link to="#" id="darkButton" className="btn btn-sm w-100 btn-primary mt-2" onClick={toggleDarkMode}>
            Dark
          </Link>
          <Link to="#" className="btn btn-sm w-100 btn-light mt-2">
            English
          </Link>
          <Link to="#" className="btn btn-sm w-100 btn-primary mt-2">
            Arabic
          </Link>
        </div>
        <div className="bottom">
          <Link
            to="#"
            onClick={toggleSwitcher}
            className="settings switcher-btn shadow-md text-primary bg-white"
          >
            <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;

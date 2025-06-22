import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/Home">
        <lord-icon
          src="https://cdn.lordicon.com/upjgggre.json"
          trigger="morph"
          state="morph-home-2"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to="/Products">
        <lord-icon
          src="https://cdn.lordicon.com/nvtfowkn.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to="/Cart">
        <lord-icon
          src="https://cdn.lordicon.com/zmvzumis.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to="/Profile">
        <lord-icon
          src="https://cdn.lordicon.com/bhfjfgqz.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>
    </div>
  );
};

export default Footer;

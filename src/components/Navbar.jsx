import { NavLink } from "react-router-dom";

const Footer = ({token}) => {
  return (
    <div className="footer">
      <NavLink to="/">
        <lord-icon
          src="https://cdn.lordicon.com/upjgggre.json"
          trigger="morph"
          state="morph-home-2"
          colors="primary:#ffffff"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to={`/owner/products/${token}`}>
        <lord-icon
          src="https://cdn.lordicon.com/nvtfowkn.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to={`/owner/cart/${token}`} >
        <lord-icon
          src="https://cdn.lordicon.com/zmvzumis.json"
          trigger="hover"
           colors="primary:#ffffff"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>

      <NavLink to="/owner/profile">
        <lord-icon
          src="https://cdn.lordicon.com/bhfjfgqz.json"
          trigger="hover"
           colors="primary:#ffffff"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </NavLink>
    </div>
  );
};

export default Footer;

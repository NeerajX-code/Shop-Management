import React from "react";
import { NavLink } from "react-router";
import Footer from "../../components/Footer";

const UserHome = () => {
  return (
    <div className="userHome">
      <div className="navBar">
        <div className="w-fit">
          <img
            className="w-[38px] rounded-[50%] h-[38px] object-cover"
            src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl">logo</h1>
        </div>
        <NavLink to="/Notification">
          <lord-icon
            src="https://cdn.lordicon.com/psnhyobz.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
          ></lord-icon>
        </NavLink>
      </div>
      <div className="main">
        <div className="searchBar">
          <lord-icon
            src="https://cdn.lordicon.com/zhtsepgu.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          <input type="text" placeholder="Search" />
        </div>

        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click </h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click </h3>
        </article>

        <div className="featured-product">
          <h1>Fetaures Products</h1>
        </div>

        <div className="announcements-banner">
          <h3>Announcements Banner</h3>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default UserHome;

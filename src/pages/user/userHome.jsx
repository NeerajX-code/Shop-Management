import React from "react";
import { NavLink } from "react-router";
import "../../styles/userHome.css";


const UserHome = () => {
  return (
    <div className="userHome">
      <div className="navBar">
        <div className="user-img">
          <img
            className="user-image"
            src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div href="/Notification">
          <lord-icon
            src="https://cdn.lordicon.com/psnhyobz.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
          ></lord-icon>
        </div>
      </div>

      <div className="main">
        <div className="searchBar">
          <lord-icon
            src="https://cdn.lordicon.com/zhtsepgu.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
          ></lord-icon>
          <input type="text" placeholder="Search" />
        </div>

        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>
        <article className="article-one">
          <h3>Order Everything from Chips to Chawal in One Click</h3>
        </article>

        <div className="featured-product">
          <h1>Features Products</h1>
        </div>

        <div className="announcements-banner">
          <h3>Announcements Banner</h3>
        </div>
      </div>
    </div>
  );
};
export default UserHome;

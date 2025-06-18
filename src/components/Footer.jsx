import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
    </div>
  )
}

export default Footer
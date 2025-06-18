import React from 'react'
import { NavLink } from 'react-router'
import Footer from '../../components/Footer'

const userHome = () => {
  return (
    <div>
       <div>
         <input type="text"  placeholder='Search Products'/>
          <NavLink to='/Notification'>🔔</NavLink>
       </div>
       <article>
         <h3>Order Everything from Chips to Chawal in One Click</h3>
       </article>
      <article>
        <div>Bulk Ration Store</div>
        <div>Retail Pack Store</div>
      </article>
      <div><h1>Fetaures Products</h1></div>
      <div><h1>Fetaures Products</h1></div>
      <div><h3>Announcements Banner</h3></div>
      <Footer />
    </div>
  )
}

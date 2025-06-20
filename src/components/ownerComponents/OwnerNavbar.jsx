import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const OwnerNavbar = () => {
    const [activeBtn,setActiveBtn] = useState("house");
  return (
     <div className='ownerNavbar'>
        <NavLink onClick={()=>setActiveBtn("house")} to='/' ><House /> {activeBtn == "house" && <h4>Home</h4>}</NavLink>
        <NavLink onClick={()=>setActiveBtn("products")}><ShoppingBag />{activeBtn == "products" && <h4>Products</h4>}</NavLink>
        <NavLink onClick={()=>setActiveBtn("cart")}><ShoppingCart />{activeBtn == "cart" && <h4>Cart</h4>}</NavLink>
        <button><i className='ri-menu-fold-line'></i></button>
     </div>
  )
}

export default OwnerNavbar
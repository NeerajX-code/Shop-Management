import React from 'react'
import { useSelector } from 'react-redux'
import OwnerProducts from "./owner/OwnerProducts"
import UserProducts from "./user/UserProducts"
const Products = () => {
  const user = useSelector(state => state.userReducer.user)
  return (
    <>
      {user?.role === "owner" && <OwnerProducts />}
      {user?.role === "user" && <UserProducts />}
    </>
  )
}

export default Products
import React from 'react'
import OwnerCart from './owner/OwnerCart'
import UserCart from './user/UserCart'
import { useSelector } from 'react-redux'

const Cart = () => {
  const user = useSelector(state => state.userReducer.user)
  console.log(user)
  return (
    <>
      {user?.role === "owner" && <OwnerCart />}
      {user?.role === "user" && <UserCart />}
    </>
  )
}

export default Cart
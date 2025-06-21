import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom'
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import Profile from "../pages/Profile"
import CreateProduct from '../pages/owner/createProducts'
import AuthWrapper from '../Utils/AuthWrapper'
import { useSelector } from 'react-redux'
import OwnerHome from '../pages/owner/OwnerHome'

const MainRoutes = () => {
   const user = useSelector((state) => state.userReducer.user)
   console.log(user)
  return (
   <Routes>
       <Route path="/" element={
        <AuthWrapper>
          {user?.role == "owner" && <OwnerHome /> }
          {user?.role == "costumer" && <Cart /> }
        </AuthWrapper>} />
       <Route path="/Products" element={<Products />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/Profile" element={<Profile />} />
       <Route path='/owner/Create-products' element={<CreateProduct />} />
    </Routes>
  );
};

export default MainRoutes;

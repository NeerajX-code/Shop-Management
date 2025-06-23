import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import Profile from "../pages/Profile"
import CreateProduct from '../pages/owner/createProducts'
import AuthWrapper from '../Utils/AuthWrapper'
import OwnerProfile from '../pages/owner/OwnerProfile'
import MyProducts from '../pages/owner/MyProducts'


const MainRoutes = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={
        <AuthWrapper>
          <Products />
        </AuthWrapper>
      } />
      <Route path="/Cart" element={<AuthWrapper><Cart /></AuthWrapper>} />
      <Route path="/Profile" element={<AuthWrapper><Profile /></AuthWrapper>} />
      <Route path='/owner/Create-products' element={<AuthWrapper><CreateProduct /></AuthWrapper>} />
      <Route path='/owner/Profile' element={<AuthWrapper><OwnerProfile /></AuthWrapper>} />
      <Route path='/owner/My-products' element={<MyProducts />} />
    </Routes>
  );
};

export default MainRoutes;

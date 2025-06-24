import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import Profile from "../pages/Profile"
import CreateProduct from '../pages/owner/createProducts'
import AuthWrapper from '../Utils/AuthWrapper'
import OwnerProfile from '../pages/owner/OwnerProfile'
import MyProducts from '../pages/owner/MyProducts'
import OwnerProducts from '../pages/owner/OwnerProducts'
import OwnerCart from '../pages/owner/OwnerCart'


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
      <Route path='/owner/products/:token' element={<AuthWrapper><OwnerProducts /></AuthWrapper>} />
      <Route path='/owner/cart/:token' element={<AuthWrapper><OwnerCart /></AuthWrapper>} />
    </Routes>
  );
};

export default MainRoutes;

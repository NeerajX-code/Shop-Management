import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom'
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import Profile from "../pages/Profile"

const MainRoutes = () => {
  return (
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Products" element={<Products />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;

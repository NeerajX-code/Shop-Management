import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";
import Cookies from "js-cookie"
import { useDispatch } from "react-redux";
import { asyncFetchUser } from "./store/actions/userActions";

const App = () => {
  const [cookie] = useState(Cookies.get("token"));
  const dispatch = useDispatch();
  
  useEffect(() => {
   if(cookie) console.log(cookie);
     dispatch(asyncFetchUser());
  }, []);
  
  
  return (
    <div className="app">
      <MainRoutes />
    {cookie && <Navbar /> } 
    </div>
  );
};

export default App;

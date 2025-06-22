import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Cookies from "js-cookie"
import { useDispatch, useSelector } from "react-redux";
import { asyncUserProfile } from "./store/actions/userActions";


const App = () => {
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      dispatch(asyncUserProfile(token));
    }
  }, [user])

  useEffect(() => {
    if (token) {
      dispatch(asyncUserProfile(token));
    }
  }, []);

  return (
    <div className="app">
      <MainRoutes />
      {(user?.role === "owner" || user?.role === "customer") && <Navbar />}
    </div>
  );
};

export default App;

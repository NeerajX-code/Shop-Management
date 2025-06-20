import Login from '../components/Login'
import Cookies from "js-cookie"
import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AuthWrapper = ({children}) => {
    
     const [user, setUser] = useState(localStorage.getItem("user"));
     useEffect(() => {
        const interval = setInterval(() => {
            setCookie(Cookies.get("token"));
        }, 1000); // har 1 second me check karega

        return () => clearInterval(interval);
    }, [user]);
     
    return user ? <>{children}</> : <Home />;
}

export default AuthWrapper
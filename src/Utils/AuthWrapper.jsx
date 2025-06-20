import Login from '../components/Login'
import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AuthWrapper = ({children}) => {
    
     const [user, setUser] = useState(localStorage.getItem("user"));
     useEffect(() => {
    }, [user]);
     
    return user ? <>{children}</> : <Home />;
}

export default AuthWrapper
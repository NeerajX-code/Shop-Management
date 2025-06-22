import Login from '../components/Login'
import Home from '../pages/Home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUserProfile } from '../store/actions/userActions';
import Cookies from "js-cookie";

const AuthWrapper = ({ children }) => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const token = Cookies.get("token");
    useEffect(() => {
        if (token) {
            dispatch(asyncUserProfile(token));
        }
    }, [user]);

    return user ? <>{children}</> : <Home />;
}

export default AuthWrapper
import Login from '../components/Login'
import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUserProfile } from '../store/actions/userActions';
import Cookies from "js-cookie";
import { loaduser } from '../store/reducers/userSlice';
import { Navigate } from 'react-router';

const AuthWrapper = ({ children }) => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const token = Cookies.get("token");
    useEffect(() => {
        if (token) {
            dispatch(asyncUserProfile(token))
        } else {
            dispatch(loaduser(null));
        }
    }, [token]);


    return user !== null ? <>{children}</> : <Navigate to="/" replace />;
}

export default AuthWrapper
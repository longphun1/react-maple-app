import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../store/user/user.selector';

const PrivateRoute = () => {
    const isAuthenticated = useSelector(selectCurrentUser);

    return isAuthenticated ? <Outlet/> : <Navigate to="/"/>
};

export default PrivateRoute;
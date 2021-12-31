import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    isAuth: boolean;
}

const PrivateRoute = ({ isAuth }: Props) => {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute
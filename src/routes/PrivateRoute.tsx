import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from '../pages/login';

interface Props extends RouteProps {
    isAuth: boolean;
}

const PrivateRoute = ({ isAuth, ...routeProps }: Props) => {
    {console.log('isauth', isAuth)}
    if (isAuth) {
        return <Route {...routeProps} />;
    }
    return <Login />;
};

export default PrivateRoute
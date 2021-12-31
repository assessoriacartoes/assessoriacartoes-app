import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isLogin from './isLogin';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Navigate to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const user: any = localStorage.getItem('user')
    return (
        <Route {...rest} render={props => (
            user == 1 ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
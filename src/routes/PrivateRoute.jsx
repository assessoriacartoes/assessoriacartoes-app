import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}')

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            currentUser.tipoDeUsuario = 1 || currentUser.tipoDeUsuario === 2 ?
                <Component {...props} />
                : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;
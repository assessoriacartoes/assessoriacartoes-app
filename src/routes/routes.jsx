import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import LoginForm from '../pages/login/index'
import { Navigate } from 'react-router-dom';
import Adm from '../pages/adm/index'
import PrivateRoute from './PrivateRoute'

export default function RoutesConfig() {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}')

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={currentUser => currentUser.tipoDeUsuario === 1 ? (<Home />) : (<Navigate to="/admin" />)} />
                <Route exact path="/login" element={<LoginForm />} />
                {/* <Route exact path="/esqueci-minha-senha" element={<ForgotPassword />} /> */}
                {/* <Route exact path="/cadastrar-nova-senha" element={<SaveNewPassword />} /> */}
                <PrivateRoute path="/admin" omponent={Adm} exact />
            </Routes>
        </BrowserRouter>
    )
}

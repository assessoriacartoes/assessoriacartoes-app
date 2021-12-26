import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import LoginForm from '../pages/login/index'
import ForgotPassword from '../pages/forgotPassword/index'
import SaveNewPassword from '../pages/saveNewPassword/index'
import SaveNewClient from '../pages/SaveNewClient/index'

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/esqueci-minha-senha" element={<ForgotPassword />} />
                <Route exact path="/cadastrar-nova-senha" element={<SaveNewPassword />} />
                <Route exact path="/cadastro-de-cliente" element={<SaveNewClient />} />
            </Routes>
        </BrowserRouter>
    )
}

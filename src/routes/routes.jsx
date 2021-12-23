import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Home />} />
                <Route exact path="/esqueci-minha-senha" element={<Home />} />
                <Route exact path="/cadatrar-cliente" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
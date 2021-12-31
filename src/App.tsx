import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/admin'
import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './routes/PrivateRoute'

export default function App() {
  function isAuthorized(): boolean {
    const tipoDeUsuario = localStorage.getItem('user')
    return tipoDeUsuario ? true : false;
  }

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<PrivateRoute isAuth={isAuthorized()} />}>
            <Route path='/home/dash' element={<Home />} />
            <Route path='/home/admin' element={<Admin />} />
          </Route>

          <Route path='*' element={<h1>Rota não encontrada</h1>} />
        </Routes>
      </Fragment>
    </Router>
  )
}
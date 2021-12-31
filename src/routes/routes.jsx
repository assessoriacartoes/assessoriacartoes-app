// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { Navigate } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute';

// import Home from '../pages/home';
// import Login from '../pages/login';
// import Adm from '../pages/adm';

// export default function RoutesConfig() {
//     const currentUser = JSON.parse(localStorage.getItem('user'))

//     console.log('currentUser', currentUser)
//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* <Route exact path="/login" element={<LoginForm />} />
//                 {currentUser &&
//                     <>
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="/admin" element={<Adm />} exact />
//                     </>
//                 } */}
//                 <PublicRoute component={Home} path="/" exact />
//                 <PublicRoute component={Login} path="/login" exact />
//                 <PrivateRoute component={Adm} path="/adm" exact />
//             </Routes>
//         </BrowserRouter>
//     )
// }

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Adm from './pages/adm'
import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={() => <Login setIsAuth={setIsAuth} />} />
        <PrivateRoute isAuth={isAuth} path='/admin' element={Adm}/>
      </Routes>
    </Router>
  )
}




{/* <PublicRoute component={Home} path="/" exact />
        <PublicRoute component={Login} path="/login" exact />
        <PrivateRoute component={Home} path="/" exact /> */}

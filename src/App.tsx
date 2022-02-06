import { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Admin from './pages/admin'
import Home from './pages/home'
import Acess from './pages/acess'
import Login from './pages/login'
import PrivateRoute from './routes/PrivateRoute'

export default function App() {
  function isAuthorized(): any {
    if (typeof window !== 'undefined') {
      const user: any = localStorage.getItem('cliente')
      return user.tipoDeUsuario ? true : false;
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/acessar/:id' exact component={Acess} />
        <PrivateRoute component={Admin} path="/admin" exact />
      </Switch>
    </BrowserRouter>
  )
}
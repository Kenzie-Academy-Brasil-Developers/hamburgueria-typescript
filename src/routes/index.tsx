import { Cadastro } from "../pages/Cadastro"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

import { Switch, Route } from "react-router-dom"

export const Routes = () => {

    return(
        <>
        <Switch>
            {/* Cadastro */}
            <Route path='/register'>
                <Cadastro/>
            </Route>

            {/* Dashboard */}
            <Route path='/dashboard'>
                <Dashboard/>
            </Route>

            {/* Home */}
            <Route exact path='/'>
                <Home/>
            </Route>

            {/* Login */}
            <Route path='/login'>
               <Login/> 
            </Route>
        </Switch>
        </>
    )
}
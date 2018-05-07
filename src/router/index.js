import React, { Component } from 'react'
import  {
    Router,
    Route,
    Switch
} from 'react-router-dom'
import PrivateRoute from './../components/PrivateRoute'

import Index from './../containers/Index/index'
import Login from './../containers/Login/index'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class App extends Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={ Index }></PrivateRoute>
                    <Route  path="/login" component={ Login }></Route>
                </Switch>
            </Router>
        )
    }
}
export default App
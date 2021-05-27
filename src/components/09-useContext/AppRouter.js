import React from 'react'
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomaScreen from './HomaScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './NavBar';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route path="/" component={ HomaScreen } exact />
                    <Route path="/about" component={ AboutScreen } />
                    <Route path="/login" component={ LoginScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter

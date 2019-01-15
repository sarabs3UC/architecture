import React from 'react';
import { Switch, Route } from "react-router-dom";
import {LoginPage, RegisterPage} from './pages/';
import declarations from './declarations';

const {ROUTE} = declarations;

const AuthModuleRouting  = props => {
    return (
        <Switch>
            <Route path={`${ROUTE}/login`} component={LoginPage} />
            <Route path={`${ROUTE}/register`} component={RegisterPage} />
            <Route path={`${ROUTE}/`} component={LoginPage} />
        </Switch>
    )
};

export default AuthModuleRouting;
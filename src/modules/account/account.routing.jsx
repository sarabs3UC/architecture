import React from 'react';
import { Switch, Route } from "react-router-dom";
import {AccountsPage} from './pages/';
import declarations from './declarations';

const {ROUTE} = declarations;

const AuthModuleRouting  = props => {
    return (
        <Switch>
            <Route path={`${ROUTE}/`} component={AccountsPage} />
        </Switch>
    )
};

export default AuthModuleRouting;
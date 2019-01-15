import React from 'react';
import { Switch, Route } from "react-router-dom";
import {DriversPage, DriversDetailPage} from './pages/';
import declarations from './declarations';

const {ROUTE} = declarations;

const AuthModuleRouting  = props => {
    return (
        <Switch>
            <Route path={`${ROUTE}/:id`} component={DriversDetailPage} />
            <Route path={`${ROUTE}/`} component={DriversPage} />
        </Switch>
    )
};

export default AuthModuleRouting;
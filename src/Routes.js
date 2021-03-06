import React from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import App from "./components/App";
// auth module
import {AuthRoutes, declarations} from './modules/auth/';
// drivers module
import {DriversRoutes, DriversDeclarations} from './modules/drivers/';
// Account module
import {AccountRoutes, AccountDeclarations} from './modules/account';

const Routes = () => (
  <Switch>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path={declarations.ROUTE} component={AuthRoutes} />
    <Route path={DriversDeclarations.ROUTE} component={DriversRoutes} />
    <Route path={AccountDeclarations.ROUTE} component={AccountRoutes} />
    <Route path="/" component={App} />
  </Switch>
);

export default Routes;

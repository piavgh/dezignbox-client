import React from "react";
import {Route, Switch} from "react-router-dom";

import AppliedRoute from "./AppliedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import HomePage from "./HomePage";
import AboutUs from "../components/AboutUs";
import RegisterPage from "./RegsisterPage";
import LoginPage from "./LoginPage";
import DesignPage from "./DesignPage";
import ProductsPage from "./ProductsPage";
import DetailPage from "./DetailPage";
import CheckoutPage from "./CheckoutPage";
import TransactionsPage from "./TransactionsPage";
import NotFound from "../components/NotFound";

export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={HomePage} props={childProps}/>
    <UnauthenticatedRoute path="/login" exact component={LoginPage} props={childProps}/>
    <UnauthenticatedRoute path="/register" exact component={RegisterPage} props={childProps}/>
    <UnauthenticatedRoute path="/aboutUs" exact component={AboutUs} props={childProps}/>
    <AuthenticatedRoute path="/start-design" component={DesignPage} props={childProps}/>
    <AuthenticatedRoute path="/products" exact component={ProductsPage} props={childProps}/>
    <AuthenticatedRoute path="/products/:id" component={DetailPage} props={childProps}/>
    <AuthenticatedRoute path="/checkout/:id" component={CheckoutPage} props={childProps}/>
    <AuthenticatedRoute path="/transactions" exact component={TransactionsPage} props={childProps}/>
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound}/>
  </Switch>

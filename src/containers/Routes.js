import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./HomePage";
import RegisterPage from "./RegsisterPage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";
import NotFound from "../components/NotFound";
import AboutUs from "../components/AboutUs";
import AppliedRoute from "./AppliedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import DesignPage from "./DesignPage";

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={LoginPage} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact component={RegisterPage} props={childProps}/>
        <UnauthenticatedRoute path={"/aboutUs"} exact component={AboutUs} props={childProps}/>
        <AuthenticatedRoute path={"/start-design"} component={DesignPage} props={childProps}/>
        <AuthenticatedRoute path={"/products"} component={ProductsPage} props={childProps}/>
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound}/>
    </Switch>

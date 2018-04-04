import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./HomePage";
import RegisterPage from "./RegsisterPage";
import LoginPage from "./LoginPage";
import Products from "../components/Products";
import NotFound from "../components/NotFound";
import DesignPage from "./DesignPage";
import AboutUs from "../components/AboutUs";
import PrivateRoute from "./PrivateRoute";

export default () =>
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/login"} component={LoginPage}/>
        <Route path={"/register"} component={RegisterPage}/>
        <Route path={"/aboutUs"} component={AboutUs}/>
        <PrivateRoute path={"/start-design"} component={DesignPage}/>
        <PrivateRoute path={"/products"} component={Products}/>
        <Route component={NotFound}/>
    </Switch>
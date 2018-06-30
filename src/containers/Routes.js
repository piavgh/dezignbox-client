import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import AppliedRoute from "./AppliedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AdminRoute from "../admin/containers/AdminRoute";
import HomePage from "./HomePage";
import AboutUs from "../components/AboutUs";
import RegisterPage from "./RegsisterPage";
import LoginPage from "./LoginPage";
import DesignPage from "./DesignPage";
import ProductsPage from "./ProductsPage";
import CampaignDetailPage from "./CampaignDetailPage";
import CheckoutPage from "./CheckoutPage";
import TransactionsPage from "./TransactionsPage";
import TransactionDetailPage from "./TransactionDetailPage";
import AdminPage from "../admin/containers/AdminPage";
import AdminTransactionsPage from "../admin/containers/AdminTransactionsPage";
import NotFound from "../components/NotFound";

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={HomePage} props={this.props.childProps}/>
        <UnauthenticatedRoute path="/login" exact component={LoginPage} props={this.props.childProps}/>
        <UnauthenticatedRoute path="/register" exact component={RegisterPage} props={this.props.childProps}/>
        <UnauthenticatedRoute path="/aboutUs" exact component={AboutUs} props={this.props.childProps}/>
        <AuthenticatedRoute path="/start-design" component={DesignPage} props={this.props.childProps}/>
        <AuthenticatedRoute path="/products" exact component={ProductsPage} props={this.props.childProps}/>
        <AuthenticatedRoute path="/products/:id" component={CampaignDetailPage} props={this.props.childProps}/>
        <AuthenticatedRoute path="/checkout/:id" component={CheckoutPage} props={this.props.childProps}/>
        <AuthenticatedRoute path="/transactions" exact component={TransactionsPage} props={this.props.childProps}/>
        <AuthenticatedRoute path="/transactions/:id" component={TransactionDetailPage} props={this.props.childProps}/>
        <AdminRoute path="/admin" exact component={AdminPage} props={this.props.childProps}/>
        <AdminRoute path="/admin/transactions" exact component={AdminTransactionsPage} props={this.props.childProps}/>
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound}/>
      </Switch>
    )
  }
};

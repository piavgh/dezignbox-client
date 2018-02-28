import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from '../components/Home';
import Header from './Header';
import LoginPage from './LoginPage';
import RegisterPage from './RegsisterPage';
import AboutUs from "../components/AboutUs";
import Design from "../components/Design";
import Products from "../components/Products";
import NotFound from '../components/NotFound';

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} component={LoginPage}/>
                            <Route path={"/register"} component={RegisterPage}/>
                            <Route path={"/aboutUs"} component={AboutUs}/>
                            <Route path={"/start-design"} component={Design}/>
                            <Route path={"/products"} component={Products}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

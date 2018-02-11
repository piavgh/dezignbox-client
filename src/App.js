import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from "./components/AboutUs";
import Design from "./components/Design";
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} component={Login}/>
                            <Route path={"/register"} component={Register}/>
                            <Route path={"/aboutUs"} component={AboutUs}/>
                            <Route path={"/start-design"} component={Design}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

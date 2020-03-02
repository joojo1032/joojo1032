import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';


export class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Admin"component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
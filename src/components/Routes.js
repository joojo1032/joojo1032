import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from './Home';


export class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
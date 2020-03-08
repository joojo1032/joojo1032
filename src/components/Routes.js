import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
import { Communities } from './Communities';
import { EditPage } from './EditPage';


export class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Admin" component={Login}/>
                    <Route exact path="/Communities" component={Communities}/>
                    <Route exact path="/Edit" component={EditPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
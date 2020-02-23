import React from 'react';
import {Head} from './Header';
import './Home.css';


export class Home extends React.Component{
    render(){
        return(
            <div className="body-container">
                <Head/>
            </div>
        )
    }
}
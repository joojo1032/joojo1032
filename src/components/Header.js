import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.jpg';
import {Avatar} from 'antd';



export class Head extends React.Component{
    render(){
        return(
            <div className="header-container">
                    <div className="brand-container">
                        <div className="brand-logo"><Link to="/"><Avatar size={60} shape={"square"} src={logo} alt="logo"/></Link></div>
                    </div>
                    <ul className="nav-content">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/Communities">Communities</Link>
                    </ul>
            </div>
        )
    }
}
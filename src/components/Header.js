import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.jpg';
import {Avatar} from 'antd'



export class Head extends React.Component{
    render(){
        return(
            <div className="header-container">
                    <div className="brand-container">
                        <div className="brand-logo"><Avatar size={60} shape={"square"} src={logo} alt="logo"/></div>
                    </div>
                    <ul className="nav-content">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/Communities">Communities</Link>
                        <Link className="link" to="/Inspector">Inspector</Link>
                        <Link className="link" to="/Admin">Admin</Link>
                    </ul>
            </div>
        )
    }
}
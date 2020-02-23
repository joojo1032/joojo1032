import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class Head extends React.Component{
    render(){
        return(
            <div className="header-container">
                    <div className="brand-container">
                        <h2>Logo</h2>
                    </div>
                    <nav className="nav-container">
                        <ul className="nav-content">
                            <li><Link className="link" to="/">Home</Link></li>
                            <li><Link className="link" to="/Communities">Communities</Link></li>
                            <li><Link className="link" to="/Inspector">Inspector</Link></li>
                            <li><Link className="link" to="/Admin">Admin</Link></li>
                        </ul>
                    </nav>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">codoschedule</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/add" className="nav-link">Add</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
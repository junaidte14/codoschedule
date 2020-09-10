import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
class Header extends Component{
    render(){
        const { user } = this.props;
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
                        {
                            (!user) && (
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            )
                        }
                        {
                            (user) && (
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link">Logout</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

//export default Header;

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
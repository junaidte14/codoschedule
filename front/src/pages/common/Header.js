import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/_actions';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.auth.user;
    });
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
                                <Link to="/" onClick={(e)=> {e.preventDefault(); dispatch(authActions.logout())}} className="nav-link">Logout</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;
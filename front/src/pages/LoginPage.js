import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/_actions';
import {FaSpinner} from 'react-icons/fa';

const LoginPage = () =>{
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        if(name === 'email'){
            setEmail(value);
        }else if(name === 'password'){
            setPassword(value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(authActions.login(email, password));
        }
    }

    const loggingIn = useSelector(state => {
        return state.auth.loggingIn;
    });
    return (
        <div className="card textcenter mt-20 rounded-0">
            <div className="card-body">
                <h2>Login</h2>
                <p>Only admin can login to the app!</p>
                <form name="loginForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className={'form-control' + (submitted && !email ? ' is-invalid' : '')} name="email" value={email} onChange={handleChange} />
                        {submitted && !email &&
                            <div className="invalid-feedback">email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className={'form-control' + (submitted && !password ? ' is-invalid' : '')} name="password" value={password} onChange={handleChange} />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <FaSpinner className="icon-spin ml-2"/>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
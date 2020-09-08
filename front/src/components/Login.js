import React from 'react';
import  { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../store/user';

const Login = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    let loginFormValues = {
        email: '',
        password: ''
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if(name === 'email'){
            loginFormValues.email = value;
        }else{
            loginFormValues.password = value;
        }
    }

    const submitLogin = (e) =>{
        e.preventDefault();
        dispatch(login(JSON.stringify(loginFormValues)));
    }

    if(user){
        return <Redirect to='/'  />
    }else{
        return (
            <div className="card textcenter mt-20 rounded-0">
                <div className="card-body">
                    <form id="loginForm" noValidate
                        onSubmit={submitLogin}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="email"
                                readOnly
                            >
                                Email
                            </label>
                            <div className="col-md-10">
                                <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="col-md-10">
                                <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto rounded-0"
                                >
                                Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
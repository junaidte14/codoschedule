import React, {Component} from 'react';
import  { Redirect } from 'react-router-dom';
import vars from '../config/env';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            token: window.localStorage.getItem('codoschedules-token')
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin =  this.submitLogin.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitLogin(e){
        e.preventDefault();
        let tempLogin = {
            email: this.state.email,
            password: this.state.password
        }
        fetch(vars.apiURL+'auth/login', {
            method: 'POST',
            body: JSON.stringify(tempLogin),
            headers: {
                'Content-Type': 'application/json'
            }
        } 
        ).then(response => response.json())
        .then(result => {
            if(result.success){
                window.localStorage.setItem('codoschedules-token', result.token);
                this.setState({token: result.token});
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        if(this.state.token){
            return <Redirect to='/'  />
        }else{
            return (
                <div className="card textcenter mt-20 rounded-0">
                    <div className="card-body">
                        <form id="loginForm" noValidate
                            onSubmit={this.submitLogin}>
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
                                    value={this.state.email}
                                    onChange={this.handleChange}
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
                                    value={this.state.password}
                                    onChange={this.handleChange}
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
}

export default Login;
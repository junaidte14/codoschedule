import React, {Component} from 'react';
import  { Redirect } from 'react-router-dom';

class Logout extends Component{
    constructor(){
        super();
        this.state = {
            token: window.localStorage.getItem('codoschedules-token')
        }
    }

    componentDidMount(){
        window.localStorage.removeItem('codoschedules-token');
        this.setState({token: window.localStorage.getItem('codoschedules-token')});
    }

    render(){
        if(!this.state.token){
            return <Redirect to='/login'  />
        }else{
            return (
                <p>Logging out ....</p>
            );
        }
    }
}

export default Logout;
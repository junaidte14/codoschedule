import React, {Component} from 'react';
class SingleTask extends Component{
    constructor({match}){
        super();
        this.name = match.params.name;
    }
    render(){
        return (
            <p>{this.name}</p>
        );
    }
}

export default SingleTask;
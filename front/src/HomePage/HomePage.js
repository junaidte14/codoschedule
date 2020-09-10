import React, {Component} from 'react';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';

import ListTasks from '../_components/ListTasks';
import SearchTasks from '../_components/SearchTasks';

import { userActions } from '../_actions';

import vars from '../config/env';

class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            myTasks: [],
            orderBy: 'date',
            orderDir: 'asc',
            queryText: '',
            loaderStatus: true
        }
        this.deleteTask = this.deleteTask.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.searchTasks = this.searchTasks.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }

    deleteTask(task){
        fetch(vars.apiURL+'schedules/'+task._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.anVuYWlkdGUxNEBnbWFpbC5jb20.tnZyB_epsHmzh5q5MWWZa9ktw5uViDwxwIIVlQEeLVA'
            }
        } 
        ).then(response => response.json())
        .then(result => {
            const tasks = result.data.map(item => {
                return item;
            });
            this.setState({
                myTasks: tasks
            });
        }).catch(error => {
            console.log(error);
        });
    }

    changeOrder(order, dir){
        this.setState({
            orderBy: order,
            orderDir: dir
        });
    }

    searchTasks(text){
        this.setState({queryText: text});
    }

    updateInfo(name, value, id){
        let tempTasks = this.state.myTasks;
        let taskIndex = findIndex(tempTasks, {id: id});
        tempTasks[taskIndex][name] = value;
        this.setState({myTasks: tempTasks});
    }

    componentDidMount(){
        this.props.dispatch(userActions.getAll());
        fetch(vars.apiURL+'schedules', {} 
        ).then(response => response.json())
        .then(result => {
            const tasks = result.data.map(item => {
                return item;
            });
            this.setState({
                myTasks: tasks,
                loaderStatus: false
            });
        }).catch(error => {
            console.log(error);
        });
    }
    render(){
        let order;
        let filteredTasks = this.state.myTasks;
        if(this.state.orderDir === 'asc'){
            order = 1;
        }else{
            order = -1;
        }

        filteredTasks = filteredTasks.sort((a,b) => {
            if(a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()){
                return -1*order;
            }else{
                return 1*order;
            }
            }).filter(item => {
            return (
                item['name'].toLowerCase().includes(this.state.queryText.toLocaleLowerCase()) || 
                item['ownerName'].toLowerCase().includes(this.state.queryText.toLocaleLowerCase()) || 
                item['notes'].toLowerCase().includes(this.state.queryText.toLocaleLowerCase()) 
            );
        });
        return (
            <main className="page bg-white">
                <div className="row">
                    <div className="col-md-12 bg-white">
                        <SearchTasks 
                            orderBy = {this.state.orderBy}
                            orderDir = {this.state.orderDir}
                            changeOrder = {this.changeOrder}
                            searchTasks = {this.searchTasks}
                        />
                        {
                            (this.state.loaderStatus) && (
                                <div className="loader"></div>
                            )
                        }
                        {
                            (!this.state.loaderStatus) && (
                                <ListTasks 
                                    tasks={filteredTasks} 
                                    deleteTask={this.deleteTask}
                                    updateInfo={this.updateInfo}
                                />
                            )
                        }
                    </div>
                </div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
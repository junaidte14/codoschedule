import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { findIndex } from 'lodash';

import ListTasks from '../_components/ListTasks';
import SearchTasks from '../_components/SearchTasks';

import vars from '../config/env';

import { scheduleActions } from '../store/_actions';

const HomePage = () => {

    const dispatch = useDispatch();
    const schedulesState = useSelector(state => state.schedules, shallowEqual);

    const loaderStatus = schedulesState.loading;
    const myTasks = schedulesState.items;
    useEffect( () => {
        dispatch(scheduleActions.getAll());
    }, [dispatch]);

    const orderBy = schedulesState.orderBy;
    const orderDir = schedulesState.orderDir;
    const queryText = schedulesState.queryText;

    const deleteTask = (task) => {
        fetch(vars.apiURL+'schedules/'+task._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.anVuYWlkdGUxNEBnbWFpbC5jb20.tnZyB_epsHmzh5q5MWWZa9ktw5uViDwxwIIVlQEeLVA'
            }
        } 
        ).then(response => response.json())
        .then(result => {
            /* const tasks = result.data.map(item => {
                return item;
            }); */
        }).catch(error => {
            console.log(error);
        });
    }

    const changeOrder = (order, dir) =>{
        dispatch(scheduleActions.updateOrderBy(order));
        dispatch(scheduleActions.updateOrderDir(dir));
    }

    const searchTasks = (text) =>{
        //setQueryText(text);
    }

    const updateInfo = (name, value, id) =>{
        let tempTasks = myTasks;
        let taskIndex = findIndex(tempTasks, {id: id});
        tempTasks[taskIndex][name] = value;
    }

    let filteredTasks = [];
    if(!loaderStatus){
        let order;
        filteredTasks = myTasks;
        if(orderDir === 'asc'){
            order = 1;
        }else{
            order = -1;
        }
        filteredTasks = filteredTasks.sort((a,b) => {
            if(a[orderBy].toLowerCase() < b[orderBy].toLowerCase()){
                return -1*order;
            }else{
                return 1*order;
            }
            }).filter(item => {
            return (
                item['name'].toLowerCase().includes(queryText.toLocaleLowerCase()) || 
                item['ownerName'].toLowerCase().includes(queryText.toLocaleLowerCase()) || 
                item['notes'].toLowerCase().includes(queryText.toLocaleLowerCase()) 
            );
        });
        return (
            <main className="page bg-white">
                <div className="row">
                    <div className="col-md-12 bg-white">
                        <SearchTasks 
                            orderBy = {orderBy}
                            orderDir = {orderDir}
                            changeOrder = {changeOrder}
                            searchTasks = {searchTasks}
                        />
                        <ListTasks 
                            tasks={filteredTasks} 
                            deleteTask={deleteTask}
                            updateInfo={updateInfo}
                        />
                    </div>
                </div>
            </main>
        );
    }else{
        return (
            <main className="page bg-white">
                <div className="row">
                    <div className="col-md-12 bg-white">
                        <div className="loader"></div>
                    </div>
                </div>
            </main>
        );
    }
    
}

export  default HomePage;
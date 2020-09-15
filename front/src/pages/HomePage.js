import React, { useState, useEffect } from 'react';
import { findIndex } from 'lodash';

import ListTasks from '../_components/ListTasks';
import SearchTasks from '../_components/SearchTasks';

import vars from '../config/env';

const HomePage = () => {

    const [myTasks, setMyTasks] = useState([]);
    useEffect(() => {
        fetch(vars.apiURL+'schedules', {} 
        ).then(response => response.json())
        .then(result => {
            const tasks = result.data.map(item => {
                return item;
            });
            setMyTasks(tasks);
            setLoaderStatus(false);
        }).catch(error => {
            console.log(error);
        });
    });
    const [orderBy, setOrderBy] = useState('date');
    const [orderDir, setOrderDir] = useState('asc');
    const [queryText, setQueryText] = useState('');
    const [loaderStatus, setLoaderStatus] = useState(true);

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
            const tasks = result.data.map(item => {
                return item;
            });
            setMyTasks(tasks);
        }).catch(error => {
            console.log(error);
        });
    }

    const changeOrder = (order, dir) =>{
        setOrderBy(order);
        setOrderDir(dir);
    }

    const searchTasks = (text) =>{
        setQueryText(text);
    }

    const updateInfo = (name, value, id) =>{
        let tempTasks = myTasks;
        let taskIndex = findIndex(tempTasks, {id: id});
        tempTasks[taskIndex][name] = value;
        setMyTasks(tempTasks);
    }
    
    let order;
    let filteredTasks = myTasks;
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
                    {
                        (loaderStatus) && (
                            <div className="loader"></div>
                        )
                    }
                    {
                        (!loaderStatus) && (
                            <ListTasks 
                                tasks={filteredTasks} 
                                deleteTask={deleteTask}
                                updateInfo={updateInfo}
                            />
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export  default HomePage;
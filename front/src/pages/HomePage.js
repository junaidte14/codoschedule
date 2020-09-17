import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ListTasks from '../_components/ListTasks';
import SearchTasks from '../_components/SearchTasks';

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

    const deleteTask = (id) => {
        dispatch(scheduleActions.deleteSchedule(id));
    }

    const changeOrder = (order, dir) =>{
        dispatch(scheduleActions.updateOrderBy(order));
        dispatch(scheduleActions.updateOrderDir(dir));
    }

    const searchTasks = (text) =>{
        dispatch(scheduleActions.updateQueryText(text));
    }

    if(!loaderStatus){
        let order;
        let filteredTasks = [];
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
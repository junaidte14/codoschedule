import React from 'react';
import { useSelector } from 'react-redux';
import TaskDetails from './TaskDetails';
import Spinner from '../Spinner';

const ListTasks = (props) =>{
    const state = useSelector(state => {
        return state;
    });
    const user = state.auth.user;
    const loading = state.schedules.actionLoader;
    return (
        <div className="task-list item-list mb-3">
            {loading &&
                <Spinner showBlock={true}/>
            }
            {!loading &&
                props.tasks.map(item => (
                    <TaskDetails item={item} deleteTask={props.deleteTask} user={user} showDetails={true} key={item._id}/>
                ))
            }
        </div>
        
    );
}

export default ListTasks;
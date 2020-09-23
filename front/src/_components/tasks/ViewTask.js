import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { scheduleActions } from '../../store/_actions';
import { history } from '../../_helpers';
import TaskDetails from './TaskDetails';
import TodoLists from '../todolists/TodoLists';
import Spinner from '../Spinner';

const ViewTask = (props) =>{

    const dispatch = useDispatch();
    const itemId = props.match.params.id;
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        dispatch(scheduleActions.getItemById(itemId)).then((res) => {
            setLoading(false);
        });
    }, [itemId, dispatch]);

    const state = useSelector(state => state, shallowEqual);
    const user = state.auth.user;
    const item = state.schedules.item;

    const deleteTask = (id) => {
        dispatch(scheduleActions.deleteSchedule(id));
        history.push('/');
    }

    if(loading){
        return (
            <Spinner showBlock={true}/>
        );
    }else{
        return (
            <>
                <TaskDetails item={item} deleteTask={deleteTask} user={user} showDetails={false}/>
                <TodoLists itemId={item._id} user={user}/>
            </>
        );
    }
}

export default ViewTask;
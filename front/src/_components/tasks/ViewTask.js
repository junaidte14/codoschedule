import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { scheduleActions } from '../../store/_actions';
import {FaTrash, FaSpinner, FaEdit} from 'react-icons/fa';
import CountDown from './../CountDown.js';

const ViewTask = (props) =>{

    const dispatch = useDispatch();
    const itemId = props.match.params.id;

    useEffect( () => {
        dispatch(scheduleActions.getItemById(itemId));
    }, [itemId, dispatch]);

    const state = useSelector(state => state, shallowEqual);
    const user = state.auth.user;
    const loading = state.schedules.loading;
    const item = state.schedules.item;

    if(loading){
        return (
            <main className="page bg-white">
                <div className="row">
                    <div className="col-md-12 bg-white text-center" style={{fontSize: '70px'}}>
                        <FaSpinner className="icon-spin"/>
                    </div>
                </div>
            </main>
        );
    }else{
        
        return (
            <div className="card textcenter mt-20 rounded-0">
                <div className="card-body">
                    <div className="task-date ml-auto">
                        <CountDown 
                            timeTillDate={item.date} 
                            timeFormat="YYYY-MM-DD hh:mm:ss a" 
                            showCircles = {false}
                            showBorder = {true}
                        />
                    </div>
                    <h5 className="card-title">
                        <span>
                            {item.name}
                        </span>
                    </h5>
                    <p className="card-text">
                        <span className="task-notes">
                            {item.notes}
                        </span>
                    </p>
                </div>
                <div className="card-footer text-muted">
                    <div className="d-flex flex-row-reverse">
                        <p className="ml-auto mb-0">
                            <span>
                                {item.ownerName}
                            </span>
                        </p>
                        {
                            (user) && (
                                <>
                                <button className="btn btn-sm text-danger" onClick={() => {props.deleteTask(item._id)}}>
                                    <FaTrash />
                                </button>
                                <Link className="btn btn-sm text-primary ml-2" to={"/update-task/"+item._id}>
                                    <FaEdit />
                                </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTask;
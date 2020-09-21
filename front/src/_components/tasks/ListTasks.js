import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {FaTrash, FaSpinner, FaEdit, FaBars} from 'react-icons/fa';
import CountDown from './../CountDown.js';

const ListTasks = (props) =>{
    const state = useSelector(state => {
        return state;
    });
    const user = state.auth.user;
    const loading = state.schedules.actionLoader;
    return (
        <div className="task-list item-list mb-3">
            {loading &&
                <div className="text-center" style={{fontSize: '70px'}}>
                    <FaSpinner className="icon-spin"/>
                </div>
            }
            {!loading &&
                props.tasks.map(item => (
                    <div className="card task-item mb-3 rounded-0" key={item._id}>
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
                                        <Link className="btn btn-sm text-primary ml-2" to={"/tasks/"+item._id}>
                                            <FaBars />
                                        </Link>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    );
}

export default ListTasks;
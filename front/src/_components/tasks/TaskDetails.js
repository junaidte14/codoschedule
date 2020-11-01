import React from 'react';
import {Link} from 'react-router-dom';
import {FaTrash, FaEdit, FaBars} from 'react-icons/fa';
import CountDown from './../CountDown.js';

const TaskDetails = (props) =>{

    const {item, deleteTask, user, showDetails} = props;
    return (
        <div className="card textcenter mb-2 rounded-0">
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
                            <button className="btn btn-sm text-danger" onClick={() => {deleteTask(item._id)}}>
                                <FaTrash />
                            </button>
                            <Link className="btn btn-sm text-primary ml-2" to={"/update-task/"+item._id}>
                                <FaEdit />
                            </Link>
                            </>
                        )
                    }
                    {
                        (showDetails) && (
                            <Link className="btn btn-sm text-primary ml-2" to={"/tasks/"+item._id}>
                                <FaBars />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;
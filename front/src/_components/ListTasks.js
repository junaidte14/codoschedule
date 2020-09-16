import React from 'react';
import {FaTimes} from 'react-icons/fa';
import CountDown from './CountDown.js';

const ListTasks = (props) =>{
    return (
        <div className="task-list item-list mb-3">
            {
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
                                <button className="btn btn-sm btn-danger"
                                onClick={() => this.props.deleteTask(item)}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    );
}

export default ListTasks;
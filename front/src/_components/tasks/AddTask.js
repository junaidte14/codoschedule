import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scheduleActions, alertActions } from '../../store/_actions';

const AddTasks = () =>{

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        switch(name){
            case 'name':
                setName(value);
                break;
            case 'ownerName':
                setOwnerName(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'time':
                setTime(value);
                break;
            case 'notes':
                setNotes(value);
                break;
            default:
                break;
        }
    }

    const submitTask = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        let tempTask = {
            name: name,
            ownerName: ownerName,
            date: date + ' ' + time,
            notes: notes
        }
        if (tempTask.name && tempTask.ownerName && tempTask.date) {
            dispatch(scheduleActions.addSchedule(tempTask));
            setName('');
            setOwnerName('');
            setDate('');
            setTime('');
            setNotes('');
            setSubmitted(false);
        }else{
            dispatch(alertActions.error('Please fill required fields'));
        }
    }

    const loading = useSelector(state => {
        return state.schedules.actionLoader;
    });

    

    return (
        <div className="card textcenter mt-20 rounded-0">
            <div className="card-body">
                <h2>Add Task</h2>
                <form id="taskForm" noValidate onSubmit={submitTask}>
                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label" htmlFor="name" readOnly>Task Name</label>
                        <div className="col-md-10">
                            <input type="text" className={'form-control' + (submitted && !name ? ' is-invalid' : '')} name="name" placeholder="Task's Name" value={name} onChange={handleChange}/>
                            {submitted && !name &&
                                <div className="invalid-feedback">Name is required</div>
                            }
                        </div>
                    </div>
    
                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label" htmlFor="ownerName">Task Owner</label>
                        <div className="col-md-10">
                            <input type="text" className={'form-control' + (submitted && !ownerName ? ' is-invalid' : '')} name="ownerName" placeholder="Owner's Name" value={ownerName} onChange={handleChange}/>
                            {submitted && !ownerName &&
                                <div className="invalid-feedback">Owner name is required</div>
                            }
                        </div>
                    </div>
    
                    <div className="form-group form-row">
                        <label className="col-md-2 col-form-label" htmlFor="date">Date</label>
                        <div className="col-md-4">
                            <input type="date" className={'form-control' + (submitted && !date ? ' is-invalid' : '')} name="date" id="date" value={date} onChange={handleChange}/>
                            {submitted && !date &&
                                <div className="invalid-feedback">Date is required</div>
                            }
                        </div>
                        <label className="col-md-2 col-form-label" htmlFor="time">Time</label>
                        <div className="col-md-4">
                            <input type="time" className={'form-control' + (submitted && !time ? ' is-invalid' : '')} name="time" id="time" value={time} onChange={handleChange}/>
                            {submitted && !time &&
                                <div className="invalid-feedback">Time is required</div>
                            }
                        </div>
                    </div>
    
                    <div className="form-group form-row">
                        <label className="col-md-2" htmlFor="notes">Notes</label>
                        <div className="col-md-10">
                            <textarea className="form-control" rows="4" cols="50" name="notes" id="notes" placeholder="Task Notes" value={notes} onChange={handleChange}/>
                        </div>
                    </div>
    
                    <div className="form-group form-row mb-0">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary ml-auto rounded-0">Add Task</button>
                            {loading &&
                                <img alt="login icon" className="ml-2" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTasks;
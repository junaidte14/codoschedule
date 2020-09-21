import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { scheduleActions, alertActions } from '../../store/_actions';
import Spinner from '../Spinner';

const UpdateTask = (props) =>{

    const dispatch = useDispatch();
    const itemId = props.match.params.id;

    const [name, setName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect( () => {
        dispatch(scheduleActions.getItemById(itemId)).then(res => {
            const data = res.data;
            setName(data.name);
            setOwnerName(data.ownerName);
            const splittedDate = data.date.split(" ");
            setDate(splittedDate[0]);
            setTime(splittedDate[1]);
            setNotes(data.notes);
        });
    }, [itemId, dispatch]);

    const state = useSelector(state => state.schedules, shallowEqual);
    const loading = state.loading;
    const actionLoader = state.actionLoader;

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
            dispatch(scheduleActions.updateSchedule(itemId, tempTask));
            setSubmitted(false);
        }else{
            dispatch(alertActions.error('Please fill required fields'));
        }
    }

    if(loading){
        return (
            <Spinner showBlock={true}/>
        );
    }else{
        
        return (
            <div className="card textcenter mt-20 rounded-0">
                <div className="card-body">
                    <h2>Update Task</h2>
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
                                <button type="submit" className="btn btn-primary ml-auto rounded-0 mr-2">Update Task</button>
                                {actionLoader &&
                                    <Spinner showBlock={false}/>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateTask;
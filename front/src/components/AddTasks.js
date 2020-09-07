import React, {Component} from 'react';
import vars from '../config/env';

class AddTasks extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            ownerName: '',
            date: '',
            time: '',
            notes: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitTask =  this.submitTask.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitTask(e){
        e.preventDefault();
        let tempTask = {
            name: this.state.name,
            ownerName: this.state.ownerName,
            date: this.state.date + ' ' + this.state.time,
            notes: this.state.notes
        }
        fetch(vars.apiURL+'schedules', {
            method: 'POST',
            body: JSON.stringify(tempTask),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.anVuYWlkdGUxNEBnbWFpbC5jb20.tnZyB_epsHmzh5q5MWWZa9ktw5uViDwxwIIVlQEeLVA'
            }
        } 
        ).then(response => response.json())
        .then(result => {
            if(result.success){
                this.setState({
                    name: '',
                    ownerName: '',
                    date: '',
                    time: '',
                    notes: ''
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <div className="card textcenter mt-20 rounded-0">
                <div className="card-body">
                    <form id="taskForm" noValidate
                        onSubmit={this.submitTask}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="name"
                                readOnly
                            >
                                Task Name
                            </label>
                            <div className="col-md-10">
                                <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Task's Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="ownerName"
                            >
                                Task Owner
                            </label>
                            <div className="col-md-10">
                                <input
                                type="text"
                                className="form-control"
                                name="ownerName"
                                placeholder="Owner's Name"
                                value={this.state.ownerName}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="date"
                            >
                                Date
                            </label>
                            <div className="col-md-4">
                                <input
                                type="date"
                                className="form-control"
                                name="date"
                                id="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="time"
                            >
                                Time
                            </label>
                            <div className="col-md-4">
                                <input
                                type="time"
                                className="form-control"
                                name="time"
                                id="time"
                                value={this.state.time}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="notes">
                                Notes
                            </label>
                            <div className="col-md-10">
                                <textarea
                                className="form-control"
                                rows="4"
                                cols="50"
                                name="notes"
                                id="notes"
                                placeholder="Task Notes"
                                value={this.state.notes}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
        
                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto rounded-0"
                                >
                                Add Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTasks;
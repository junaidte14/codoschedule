import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todolistActions, alertActions } from '../../store/_actions';
import Spinner from '../Spinner';
import DraftEditor from '../DraftEditor';

const AddForm = (props) =>{

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [items, setItems] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        switch(name){
            case 'name':
                setName(value);
                break;
            case 'items':
                setItems(value);
                break;
            default:
                break;
        }
    }

    const updateItems = (items) => {
        setItems(items);
    }

    const submitForm = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        let tempItem = {
            name: name,
            schedule_id: props.itemId,
            items: JSON.stringify(items)
        }
        if (tempItem.name && tempItem.items) {
            dispatch(todolistActions.addItem(tempItem)).then(res => {
                setSubmitted(false);
            });
        }else{
            dispatch(alertActions.error('Please fill required fields'));
        }
    }

    const loading = useSelector(state => {
        return state.todolists.actionLoader;
    });

    return (
        <div className="card textcenter mt-20 rounded-0">
            <div className="card-body">
                <h2>Add Todo List</h2>
                <div className="col-md-12 mb-2">
                    <input type="text" className={'form-control' + (submitted && !name ? ' is-invalid' : '')} name="name" placeholder="Task's Name" value={name} onChange={handleChange}/>
                    {submitted && !name &&
                        <div className="invalid-feedback">Name is required</div>
                    }
                </div>

                <div className="col-md-12 mb-2">
                    <DraftEditor updateItems={updateItems} data={null} readOnly={false}/>
                </div>

                <div className="col-md-12 mb-2">
                    <button className="btn btn-primary ml-auto rounded-0" onClick={submitForm}>Save</button>
                    {loading &&
                        <Spinner showBlock={false}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default AddForm;
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FaBackward} from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { todolistActions, alertActions } from '../../store/_actions';
import Spinner from '../Spinner';
import DraftEditor from '../DraftEditor';

const UpdateForm = (props) =>{

    const dispatch = useDispatch();
    const itemId = props.match.params.id;

    const [name, setName] = useState('');
    const [schedule_id, setScheduleId] = useState('');
    const [items, setItems] = useState(null);
    const [newitems, setNewItems] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect( () => {
        dispatch(todolistActions.getItemById(itemId)).then(res => {
            const data = res.data;
            setName(data.name);
            setItems(data.items);
            setScheduleId(data.schedule_id);
        });
    }, [itemId, dispatch]);

    const state = useSelector(state => state.todolists, shallowEqual);
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
            case 'items':
                setItems(value);
                break;
            default:
                break;
        }
    }

    const updateItems = (items) => {
        setNewItems(items);
    }

    const submitForm = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        let tempItem = {
            name: name,
            schedule_id: schedule_id,
            items: JSON.stringify(newitems)
        }
        if (tempItem.name && tempItem.items) {
            dispatch(todolistActions.updateItem(itemId, tempItem)).then(res => {
                setSubmitted(false);
            });
        }else{
            dispatch(alertActions.error('Please fill required fields'));
        }
    }

    if(loading || !items){
        return (
            <Spinner showBlock={true}/>
        );
    }else{
        return (
            <div className="card textcenter mt-20 rounded-0">
                <div className="card-header flex-nav-wrapper">
                    <span>Update</span>
                    <span className="flex-nav-spacer"></span>
                    <Link className="btn btn-sm text-primary" to={"/tasks/"+schedule_id}>
                        <FaBackward />
                    </Link>
                </div>
                <div className="card-body">
                    <div className="col-md-12 mb-2">
                        <input type="text" className={'form-control' + (submitted && !name ? ' is-invalid' : '')} name="name" placeholder="Task's Name" value={name} onChange={handleChange}/>
                        {submitted && !name &&
                            <div className="invalid-feedback">Name is required</div>
                        }
                    </div>
    
                    <div className="col-md-12 mb-2">
                        <DraftEditor updateItems={updateItems} data={items} readOnly={false}/>
                    </div>
    
                    <div className="col-md-12 mb-2">
                        <button className="btn btn-primary ml-auto rounded-0" onClick={submitForm}>Save</button>
                        {actionLoader &&
                            <Spinner showBlock={false}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateForm;
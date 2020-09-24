import React from 'react';
import {Link} from 'react-router-dom';
import {FaTrash, FaEdit} from 'react-icons/fa';
import { todolistActions } from '../../store/_actions';
import { useDispatch } from 'react-redux';
import DraftEditor from '../DraftEditor';

const SingleList = (props) =>{

    const {data} = props;
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(todolistActions.deleteItem(id));
    }

    return (
        <>
            <div className="flex-nav-wrapper">
                <h3>{data.name}</h3>
                <span className="flex-nav-spacer"></span>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="btn btn-sm text-primary" to={"/update-todo/"+data._id}>
                            <FaEdit />
                        </Link>
                        <button className="btn btn-sm text-danger" onClick={() => {deleteItem(data._id)}}>
                            <FaTrash />
                        </button>
                    </li>
                </ul>
            </div>
            <DraftEditor data={data.items} readOnly={true}/>
        </>
    );
}

export default SingleList;
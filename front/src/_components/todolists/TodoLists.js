import React, { useState } from 'react';
import ShowLists from './ShowLists';
import AddForm from './addForm';

const TodoLists = (props) =>{

    const {itemId, user} = props;
    const [addForm, setAddForm] = useState(false);

    return (
        <div className="card textcenter mb-2 rounded-0">
            <div className="card-header flex-nav-wrapper">
                <span>
                    Todo Lists
                </span>
                <span className="flex-nav-spacer"></span>
                <ul className="nav">
                    <li className="nav-item">
                        <span className="nav-link" style={{cursor: 'pointer'}} onClick={()=> {setAddForm(!addForm)}}>Add</span>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                {!addForm &&
                    <ShowLists itemId={itemId} user={user}/>
                }
                {addForm &&
                    <AddForm />
                }
            </div>
        </div>
    );
}

export default TodoLists;
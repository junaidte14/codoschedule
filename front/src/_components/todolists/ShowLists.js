import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { todolistActions } from '../../store/_actions';
import Spinner from '../Spinner';

const ShowLists = (props) =>{

    const {itemId} = props;
    const dispatch = useDispatch();
    const todolistsState = useSelector(state => state.todolists, shallowEqual);

    const loading = todolistsState.loading;
    const todolists = todolistsState.items;
    useEffect( () => {
        dispatch(todolistActions.getAllByAttr(itemId));
    }, [dispatch, itemId]);
    return (
        <>
            {loading &&
                <Spinner showBlock={true}/>
            }
            {!loading && todolists.length !== 0 &&
                todolists.map(item => (
                    <p>items found</p>
                ))
            }
            {!loading && todolists.length === 0 &&
                <p>No items found</p>
            }
        </>
    );
}

export default ShowLists;
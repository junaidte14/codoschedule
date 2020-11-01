import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { todolistActions } from '../../store/_actions';
import Spinner from '../Spinner';
import SingleList from './SingleList';

const ShowLists = (props) =>{

    const {itemId, user} = props;
    const dispatch = useDispatch();
    const todolistsState = useSelector(state => state.todolists, shallowEqual);
    const loading = todolistsState.loading;
    const todolists = todolistsState.items;
    useEffect( () => {
        const abortController = new AbortController();
        dispatch(todolistActions.getAllByAttr(itemId, abortController));
        return () => abortController.abort();
    }, [dispatch, itemId]);
    return (
        <>
            {loading &&
                <Spinner showBlock={true}/>
            }
            {!loading && todolists.length !== 0 &&
                todolists.map(item => (
                    <SingleList data={item} key={item._id} user={user}/>
                ))
            }
            {!loading && todolists.length === 0 &&
                <p>No items found</p>
            }
        </>
    );
}

export default ShowLists;
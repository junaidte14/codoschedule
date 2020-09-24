import { actionTypes } from '../action.types';

const initialState = {
  loading: true,
  actionLoader: false,
  items: [],
  error: null
};
export function todolists(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TODOLISTS.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.TODOLISTS.GETALL_SUCCESS:
      return {
        ...state,
        items: action.todolists.data,
        loading: false
      }
    case actionTypes.TODOLISTS.GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case actionTypes.TODOLISTS.GETALLBYSCHEDULE_REQUEST:
    return {
        ...state,
        loading: true
    }
    case actionTypes.TODOLISTS.GETALLBYSCHEDULE_SUCCESS:
    return {
        ...state,
        items: action.todolists.data,
        loading: false
    }
    case actionTypes.TODOLISTS.GETALLBYSCHEDULE_FAILURE:
    return {
        ...state,
        error: action.error,
        loading: false,
    }

    case actionTypes.TODOLISTS.GETBYID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.TODOLISTS.GETBYID_SUCCESS:
      return {
        ...state,
        item: action.todolist.data,
        loading: false
      }
    case actionTypes.TODOLISTS.GETBYID_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case actionTypes.TODOLISTS.ADD_REQUEST:
      return {
        ...state,
        actionLoader: true
      }
    case actionTypes.TODOLISTS.ADD_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.newItem],
        actionLoader: false
      }
    case actionTypes.TODOLISTS.ADD_FAILURE:
      return {
        ...state,
        error: action.error,
        actionLoader: false
      }

    case actionTypes.TODOLISTS.UPDATE_REQUEST:
      return {
        ...state,
        actionLoader: true
      }
    case actionTypes.TODOLISTS.UPDATE_SUCCESS:
      {
        const newItems = state.items.map((item)=>{
          if(item._id === action.id) {
            return action.todolist
          } else return item;
        });
        return {
          ...state,
          items: newItems,
          item: action.todolist,
          actionLoader: false
        }
      }
    case actionTypes.TODOLISTS.UPDATE_FAILURE:
      return {
        ...state,
        error: action.error,
        actionLoader: false
      }

    case actionTypes.TODOLISTS.DELETE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.TODOLISTS.DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(e => e._id !== action.id),
        loading: false
      }
    case actionTypes.TODOLISTS.DELETE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
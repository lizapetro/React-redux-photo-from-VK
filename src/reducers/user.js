import {GET_LOGIN_SUCCESS} from '../actions/UserActions';
import {GET_LOGIN_REQUEST} from '../actions/UserActions';
import {GET_LOGIN_ERROR} from '../actions/UserActions';

const initialState={
  name:'',
  isFetching:false,
  error:''
}

export function userReducer(state=initialState,action){
  if (action.type===GET_LOGIN_REQUEST){
    return {
      ...state,
      isFetching:true,
      error:''
    }
  }
  if (action.type===GET_LOGIN_SUCCESS){
    return {
      ...state,
      name:action.payload.first_name+action.payload.last_name,
      isFetching:false
    }
  }
  if (action.type===GET_LOGIN_ERROR){
    return {
      error:action.payload,
      name:'Аноним',
      isFetching:false
    }
  }

  return state;
}

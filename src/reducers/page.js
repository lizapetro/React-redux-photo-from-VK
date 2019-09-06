import {GET_PHOTO_REQUEST} from '../actions/PageActions';
import {GET_PHOTO_SUCCESS} from '../actions/PageActions';
const initialState={
  year:2018,
  photos:[],
  isFatching:false
}
function sortByLikes(arr){
  arr.sort((a,b)=>{
    return a.likes<b.likes?1:-1;
  });
}
export function pageReducer(state=initialState,action){
  if (action.type===GET_PHOTO_REQUEST){
    return{
      ...state,
      year:action.payload,
      isFatching:true
    }
  }
  if (action.type===GET_PHOTO_SUCCESS){
    sortByLikes(action.payload);
    return{
      ...state,
      photos:action.payload,
      isFatching:false
    }
  }
  return state;
}

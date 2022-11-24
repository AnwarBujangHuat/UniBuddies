import {
  combineReducers,
  createSlice
} from '@reduxjs/toolkit';
import {

} from './User/thunks';
import userReducer from '../Redux/User/reducer'

const appReducer = combineReducers({
  user:userReducer,
});
export default appReducer

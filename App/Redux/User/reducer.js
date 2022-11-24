import {
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
export const Reducer = createSlice({
  name: 'user',
  initialState: {
    ID: '',
    NAME: 'Yum',
    AGE: '',
    EMAIL: '',
    PHONE: '',
    IMAGE:''
  },
  reducers: {
    updateUserInfo: state => {console.log(state)},
  },
});
export default Reducer.reducer;


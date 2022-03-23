import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/slice';
import snackBarReducer from '../features/snackBar/slice';

const reducers = combineReducers({
  users: userReducer,
  snackBar: snackBarReducer,
})

export type RootState = ReturnType<typeof reducers>;

export default reducers
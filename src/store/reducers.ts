import { combineReducers } from '@reduxjs/toolkit';
import users from '../features/user/slice';
import snackBar from '../features/snackBar/slice';

const reducers = combineReducers({
  users,
  snackBar,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

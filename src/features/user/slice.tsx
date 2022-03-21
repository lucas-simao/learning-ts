import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../../utils/types';

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users.splice(action.payload, 1);
    },
  },
  extraReducers: {},
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

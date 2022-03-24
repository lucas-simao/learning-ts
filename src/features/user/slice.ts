import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addUserStorage,
  removeUserStorage,
  updateUserStorage,
} from '../../api/localStorage/user';
import { UserState, User } from '../../utils/types';

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
      addUserStorage(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      const userToRemove = state.users.find(
        (v) => v.id === action.payload,
      ) as User;

      state.users.splice(state.users.indexOf(userToRemove), 1);

      removeUserStorage(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const userToUpdate = state.users.find(
        (v) => v.id === action.payload.id,
      ) as User;

      state.users[state.users.indexOf(userToUpdate)] = action.payload;

      updateUserStorage(action.payload);
    },
  },
});

export const { setUsers, addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;

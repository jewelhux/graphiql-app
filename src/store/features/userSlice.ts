import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from '../../types/interface';

const initialState: IUserSlice = {
  auth: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      state.auth = true;
    },
    removeUser: (state) => {
      state.auth = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

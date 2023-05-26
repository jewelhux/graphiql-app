import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserSlice } from '../../types/interface';

const initialState: IUserSlice = {
  isAuth: false,
  userEmail: undefined,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.isAuth = action.payload.isAuth;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

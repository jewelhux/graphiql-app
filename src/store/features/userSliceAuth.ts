import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserSlice } from '../../types/interface';

const initialState: IUserSlice = {
  isAuth: undefined,
  userEmail: undefined,
};

export const userSliceAuth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.isAuth = action.payload.isAuth;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { setUser } = userSliceAuth.actions;

export default userSliceAuth.reducer;

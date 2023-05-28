import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVariablesSlice } from '../../types/interface';

const initialState: IVariablesSlice = {
  variables: `{
    "capsuleId": "5e9e2c5bf35918ed873b2664",
    "limit": 5
  }`,
};

export const userSliceVariables = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setVariablesState: (state, action: PayloadAction<IVariablesSlice>) => {
      state.variables = action.payload.variables;
    },
  },
});

export const { setVariablesState } = userSliceVariables.actions;

export default userSliceVariables.reducer;

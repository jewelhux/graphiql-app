import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuerySlice } from '../../types/interface';

const initialState: IQuerySlice = {
  query: `query Query($capsuleId: ID!, $limit: Int) {
    company {
      ceo
    }
    capsule(id: $capsuleId) {
      id
      landings
      missions {
        flight
        name
      }
      original_launch
      reuse_count
      status
      type
    }
    capsules(limit: $limit) {
      landings
      id
    }
    dragons {
      description
    }
  }`,
};

export const userSliceQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQueryState: (state, action: PayloadAction<IQuerySlice>) => {
      state.query = action.payload.query;
    },
  },
});

export const { setQueryState } = userSliceQuery.actions;

export default userSliceQuery.reducer;

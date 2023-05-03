import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Card, sliceType } from '../../../types/type';

const initialState: sliceType = {
  items: [
    { id: 1, text: 'one' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' },
    { id: 4, text: 'four' },
    { id: 5, text: 'five' },
  ],
};

export const сardSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    removeCard: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.items.push(action.payload);
    },
    editTextCard: (state, action: PayloadAction<Card>) => {
      state.items[action.payload.id - 1].text = action.payload.text;
    },
  },
});

export const { addCard, removeCard, editTextCard } = сardSlice.actions;

export default сardSlice.reducer;

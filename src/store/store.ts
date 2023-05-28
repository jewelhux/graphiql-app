import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducerAuth, { userSliceAuth } from './features/userSliceAuth';
import userReducerQuery, { userSliceQuery } from './features/userSliceQuery';
import userReducerVariables, { userSliceVariables } from './features/userSliceVariables';

export const store = configureStore({
  reducer: {
    [userSliceAuth.name]: userReducerAuth,
    [userSliceQuery.name]: userReducerQuery,
    [userSliceVariables.name]: userReducerVariables,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

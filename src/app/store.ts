import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fichaReducer from '../features/ficha/fichaSlice';
import sesionesSlice from '../features/sesiones/sesionesSlice';
import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/post/postsSlice';

export const store = configureStore({
  reducer: {
    ficha: fichaReducer,
    sesiones: sesionesSlice,
    users: usersReducer,
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

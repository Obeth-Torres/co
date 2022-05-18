import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fichaReducer from '../features/ficha/fichaSlice'
import sesionesSlice from '../features/sesiones/sesionesSlice';
import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/post/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ficha: fichaReducer,
    users: usersReducer,
    sesiones: sesionesSlice,
    posts: postsReducer
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

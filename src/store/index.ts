import { configureStore } from '@reduxjs/toolkit';

import { gamioApi } from '@/api/gamioApi';

export const store = configureStore({
  reducer: {
    [gamioApi.reducerPath]: gamioApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

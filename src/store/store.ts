import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../feature/toDoApp/toDoSLice";
import { tasksApi } from "../services/fetchTasks";

export const store = configureStore({
  reducer: {
    toDoSlice,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

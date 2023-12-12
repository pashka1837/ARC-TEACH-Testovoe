import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../feature/toDoApp/toDoSLice";

export const store = configureStore({
  reducer: {
    toDoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

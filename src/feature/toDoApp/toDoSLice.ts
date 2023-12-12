import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { TaskT } from "../../types/types";

interface CounterState {
  tasks: TaskT[];
  filter: string;
  doneTasksCounter: number;
}

const initialState: CounterState = {
  tasks: [],
  filter: "None",
  doneTasksCounter: 0,
};

export const toDoSlice = createSlice({
  name: "toDoApp",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskT>) => {
      console.log(action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: TaskT["id"]; status: string }>
    ) => {
      const { id, status } = action.payload;
      console.log(id, status);
      const curTask = state.tasks.find((task) => task.id === id);
      curTask!.status = status;
      toDoSlice.caseReducers.updateCounter(state);
    },
    updateFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    updateCounter: (state) => {
      const doneTasks = state.tasks.filter((task) => task.status === "Done");
      state.doneTasksCounter = doneTasks?.length;
    },
  },
});

export const { addTask, updateTask, updateFilter, updateCounter } =
  toDoSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default toDoSlice.reducer;

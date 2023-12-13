import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskT } from "../../types/types";

interface CounterState {
  tasks: TaskT[];
  filter: {
    [key: string]: boolean;
    Done: boolean;
    Pending: boolean;
  };
  doneTasksCounter: number;
}

const initialState: CounterState = {
  tasks: [],
  filter: {
    "In progress": false,
    Done: false,
    Pending: false,
  },
  doneTasksCounter: 0,
};

export const toDoSlice = createSlice({
  name: "toDoApp",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskT>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: TaskT["id"]; status: string }>
    ) => {
      const { id, status } = action.payload;
      const curTask = state.tasks.find((task) => task.id === id);
      curTask!.status = status;
      toDoSlice.caseReducers.updateCounter(state);
    },
    updateFilter: (
      state,
      action: PayloadAction<{ value: boolean; filterName: string }>
    ) => {
      const { value, filterName } = action.payload;
      state.filter[filterName] = value;
    },
    updateCounter: (state) => {
      const doneTasks = state.tasks.filter((task) => task.status === "Done");
      state.doneTasksCounter = doneTasks?.length;
    },
  },
});

export const { addTask, updateTask, updateFilter, updateCounter } =
  toDoSlice.actions;

export default toDoSlice.reducer;

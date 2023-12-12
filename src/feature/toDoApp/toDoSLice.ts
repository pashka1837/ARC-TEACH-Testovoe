import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

type TaskT = {
  id: string;
  name: string;
  desc: string;
  status: string;
};
interface CounterState {
  tasks: TaskT[];
  filter: string;
  doneTasksCounter: number;
}

const initialState: CounterState = {
  tasks: [],
  filter: "",
  doneTasksCounter: 0,
};

export const toDoSlice = createSlice({
  name: "toDoApp",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskT>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: TaskT["id"]; status: string }>
    ) => {
      const { id, status } = action.payload;
      const curTask = state.tasks.find((task) => task.id === id);
      curTask!.status = status;
      toDoSlice.actions.updateCounter();
    },
    updateFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    updateCounter: (state) => {
      const doneTasks = state.tasks.filter((task) => task.status === "done");
      state.doneTasksCounter = doneTasks?.length || 0;
    },
  },
});

export const { addTask, updateTask, updateFilter, updateCounter } =
  toDoSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default toDoSlice.reducer;
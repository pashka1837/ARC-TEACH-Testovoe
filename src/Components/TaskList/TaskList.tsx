import { Sheet, Typography } from "@mui/joy";
import { useAppSelector } from "../../hooks/reduxHooks";
import SingleTask from "../SingleTask/SingleTask";
import "./TaskList.scss";

export default function TaskList() {
  const { tasks, filter } = useAppSelector((store) => store.toDoSlice);
  const filterAr = Object.entries(filter);
  const isNoFilter = filterAr.every((filt) => !filt.at(1));
  let tasksAr = [];
  if (isNoFilter) tasksAr = tasks;
  else tasksAr = tasks.filter((task) => filter[task.status]);

  return (
    <Sheet className="taskList_container" variant="outlined">
      {tasks.length ? (
        tasksAr.map((task) => <SingleTask key={task.id} {...task} />)
      ) : (
        <Typography level="title-lg">No task has been added yet.</Typography>
      )}
    </Sheet>
  );
}

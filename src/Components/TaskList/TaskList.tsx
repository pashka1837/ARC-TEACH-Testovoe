import { Sheet, Typography } from "@mui/joy";
import { useAppSelector } from "../../hooks/reduxHooks";
import SingleTask from "../SingleTask/SingleTask";
import "./TaskList.scss";

export default function TaskList() {
  const { tasks, filter } = useAppSelector((store) => store.toDoSlice);
  const tasksAr =
    filter === "None" ? tasks : tasks.filter((task) => task.status === filter);
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

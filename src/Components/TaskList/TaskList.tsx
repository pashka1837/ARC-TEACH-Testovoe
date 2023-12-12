import { useAppSelector } from "../../hooks/reduxHooks";
import SingleTask from "../SingleTask/SingleTask";
import "./TaskList.scss";
export default function TaskList() {
  const tasksAr = useAppSelector((store) => store.toDoSlice.tasks);
  return (
    <div className="taskList_container">
      {tasksAr.map((task) => (
        <SingleTask key={task.id} {...task} />
      ))}
    </div>
  );
}

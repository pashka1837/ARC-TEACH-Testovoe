import { Button, Sheet, Switch, Typography } from "@mui/joy";
import "./TaskBar.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Dispatch, SetStateAction, useState } from "react";
import { colors } from "../MyRadioGroup/MyRadioGroup";
import { updateFilter } from "../../feature/toDoApp/toDoSLice";
import { usePostDoneTasksMutation } from "../../services/fetchTasks";

export default function TaskBar({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const { doneTasksCounter, filter, tasks } = useAppSelector(
    (state) => state.toDoSlice
  );
  const [postDoneTasks, { error }] = usePostDoneTasksMutation();
  const [noTasksError, setNoTasksError] = useState("");

  function handleFilterChange(filterName: string, filtValue: boolean) {
    dispatch(updateFilter({ filterName, value: !filtValue }));
  }

  function handlePostTasks() {
    const doneTasksNameAr = tasks
      .filter((task) => task.status === "Done")
      .map((task) => ({ title: task.title, id: task.id }));
    if (doneTasksNameAr.length) {
      setNoTasksError("");
      postDoneTasks(doneTasksNameAr);
    } else setNoTasksError("Nothing to post.");
  }

  return (
    <>
      <Sheet className="task_bar_container" color="primary" variant="soft">
        <div className="task_bar_btns">
          <Button className="add_task_btn" onClick={() => setOpen(true)}>
            Add Task
          </Button>
          <Button
            color="success"
            className="post_task_btn"
            onClick={handlePostTasks}
          >
            Post Done tasks
          </Button>
        </div>

        <div className="done_tasks_container">
          <Typography level="title-lg">
            Done tasks: <span className="">{doneTasksCounter}</span>
          </Typography>
        </div>
        <div className="task_bar_filter">
          <Typography level="title-lg">Filter by: </Typography>
          <div>
            {Object.entries(filter).map((filt) => (
              <Switch
                checked={filt.at(1)}
                key={filt.at(0)}
                onChange={() => handleFilterChange(filt.at(0), filt.at(1))}
                variant={filt.at(1) ? "solid" : "outlined"}
                color={colors[filt.at(0)]}
                endDecorator={filt.at(0)}
              />
            ))}
          </div>
        </div>
      </Sheet>

      <Typography color="danger" sx={{ mt: 2 }}>
        {noTasksError || error?.data.msg}
      </Typography>
    </>
  );
}

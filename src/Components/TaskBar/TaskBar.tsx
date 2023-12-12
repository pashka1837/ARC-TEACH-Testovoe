import { Button, Radio, Sheet, Typography } from "@mui/joy";
import "./TaskBar.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Dispatch, SetStateAction } from "react";
import MyRadioGroup from "../MyRadioGroup/MyRadioGroup";
import { updateFilter } from "../../feature/toDoApp/toDoSLice";
import { InpTextArChangeEvType } from "../../types/types";

export default function TaskBar({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const { doneTasksCounter, filter } = useAppSelector(
    (state) => state.toDoSlice
  );

  function handleFilterChange(e: InpTextArChangeEvType) {
    const newFilter = e.target.value;
    dispatch(updateFilter(newFilter));
  }
  return (
    <Sheet className="task_bar_container" color="primary" variant="soft">
      <div className="done_tasks_container">
        <Typography level="title-sm">
          Done tasks:{" "}
          <span className="doneTasksCounter">{doneTasksCounter}</span>
        </Typography>
      </div>
      <Button className="add_task_btn" onClick={() => setOpen(true)}>
        Add Task
      </Button>
      <div className="task_bar_filter">
        <Typography level="title-sm">Filter by: </Typography>
        <div>
          <MyRadioGroup
            status={filter}
            handleStatusChange={handleFilterChange}
          />
          <Radio
            onChange={handleFilterChange}
            size="sm"
            color="neutral"
            value="None"
            label="None"
            checked={filter === "None"}
          />
        </div>
      </div>
    </Sheet>
  );
}

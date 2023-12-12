import { Button, Sheet, Typography } from "@mui/joy";
import "./NewTask.scss";
import { Dispatch, SetStateAction, useState } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addTask } from "../../feature/toDoApp/toDoSLice";
import {
  FormEvType,
  InpErrorT,
  InpTextArChangeEvType,
  InpValT,
  TaskT,
} from "../../types/types";
import CloseBtn from "./CloseBtn";
import TitleInput from "./TitleInput";
import DescrInput from "./DescrInput";

export default function NewTask({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [inpVal, setInpVal] = useState<InpValT>({ taskTitle: "", desc: "" });
  const [inpError, setInpError] = useState<InpErrorT>({
    taskTitle: { error: false, errMsg: "" },
    desc: { error: false, errMsg: "" },
  });
  const dispatch = useAppDispatch();

  function handleInpChange(e: InpTextArChangeEvType) {
    const inpName = e.target.name;
    const { value } = e.target;
    if (value.length > 30 && inpName === "taskTitle")
      setInpError({
        ...inpError,
        [inpName]: {
          error: true,
          errMsg: `should be less then 30 symbols.`,
        },
      });
    else
      setInpError({
        ...inpError,
        [inpName]: { error: false, errMsg: "" },
      });
    setInpVal({ ...inpVal, [inpName]: value });
  }

  function submitDataValidation(inpVal: InpValT) {
    for (const [key, value] of Object.entries(inpVal)) {
      if (inpError[key].error) return false;
      if (!value) {
        setInpError({
          ...inpError,
          [key]: { error: true, errMsg: " can not be empty." },
        });
        return false;
      }
    }
    return true;
  }

  function handleSubmit(e: FormEvType) {
    e.preventDefault();
    if (!submitDataValidation(inpVal)) return;
    const newTask: TaskT = {
      id: nanoid(),
      title: inpVal.taskTitle,
      desc: inpVal.desc,
      status: "In progress",
    };
    dispatch(addTask(newTask));
    setOpen(false);
  }

  return (
    <div className="newTask_container">
      <form onSubmit={handleSubmit}>
        <Sheet
          className="newTask_sheet"
          sx={{
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div className="newTask_title_container">
            <Typography level="h4" component="h1">
              <b>Add New Task</b>
            </Typography>
            <CloseBtn setOpen={setOpen} />
          </div>
          <TitleInput
            inpVal={inpVal}
            inpError={inpError}
            handleInpChange={handleInpChange}
          />
          <DescrInput
            inpVal={inpVal}
            inpError={inpError}
            handleInpChange={handleInpChange}
          />

          <Button type="submit" sx={{ mt: 1 }}>
            Add Task
          </Button>
        </Sheet>
      </form>
    </div>
  );
}

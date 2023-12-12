import { Card, CardActions, CardContent, Typography } from "@mui/joy";
import { InpTextArChangeEvType, TaskT } from "../../types/types";
import "./SingleTask.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateTask } from "../../feature/toDoApp/toDoSLice";
import MyRadioGroup, { statuses } from "../MyRadioGroup/MyRadioGroup";

export default function SingleTask({ id, title, desc, status }: TaskT) {
  const dispatch = useAppDispatch();

  function handleStatusChange(e: InpTextArChangeEvType) {
    const newStatus = e.target.value;
    dispatch(updateTask({ id, status: newStatus }));
  }
  return (
    <Card variant="outlined" sx={{ width: 280 }}>
      <CardContent>
        <div className="task_card_title">
          <Typography level="title-lg">{title}</Typography>
          <Typography sx={{ color: `${statuses[status]}.400` }} level="body-xs">
            {status}
          </Typography>
        </div>
        <Typography className="single_card_desc" level="body-md">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <MyRadioGroup status={status} handleStatusChange={handleStatusChange} />
      </CardActions>
    </Card>
  );
}

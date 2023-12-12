import {
  Card,
  CardActions,
  CardContent,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";
import { InpTextArChangeEvType, TaskT, colorsT } from "../../types/types";
import "./SingleTask.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateTask } from "../../feature/toDoApp/toDoSLice";

export default function SingleTask({ id, title, desc, status }: TaskT) {
  const dispatch = useAppDispatch();
  const statuses: colorsT = {
    "In progress": "primary",
    Done: "success",
    Pending: "warning",
  };

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
        <RadioGroup
          value={status}
          onChange={handleStatusChange}
          className="task_radio_group"
        >
          {Object.entries(statuses).map((stat: string[]) => (
            <Radio
              size="sm"
              key={stat.at(0)}
              color={stat.at(1)}
              value={stat.at(0)}
              label={stat.at(0)}
              checked={stat.at(0) === status}
            />
          ))}
        </RadioGroup>
      </CardActions>
    </Card>
  );
}

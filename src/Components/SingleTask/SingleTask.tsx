import {
  Card,
  CardActions,
  CardContent,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/joy";
import { InpTextArChangeEvType, TaskT, colorsT } from "../../types/types";
import "./SingleTask.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateTask } from "../../feature/toDoApp/toDoSLice";

export default function SingleTask({ id, title, desc, status }: TaskT) {
  const dispatch = useAppDispatch();
  const colors: colorsT = {
    "In progress": "primary",
    Done: "success",
    Pending: "warning",
  };

  function handleStatusChange(e: InpTextArChangeEvType) {
    const newStatus = e.target.value;
    dispatch(updateTask({ id, status: newStatus }));
  }
  return (
    <Card variant="outlined" sx={{ width: 420 }}>
      <CardContent>
        <div className="task_card_title">
          <Typography level="title-lg">{title}</Typography>
          <Typography sx={{ color: `${colors[status]}.400` }} level="body-xs">
            {status}
          </Typography>
        </div>

        <Typography level="body-md">{desc}</Typography>
      </CardContent>
      <CardActions>
        <RadioGroup
          value={status}
          onChange={handleStatusChange}
          className="task_radio_group"
        >
          {Object.entries(colors).map((color) => (
            <Radio
              size="sm"
              key={color[0]}
              color={color[1]}
              value={color[0]}
              label={color[0]}
              checked={color[0] === status}
            />
          ))}
        </RadioGroup>
      </CardActions>
    </Card>
  );
}

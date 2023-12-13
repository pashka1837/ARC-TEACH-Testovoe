import { Radio, RadioGroup } from "@mui/joy";
import { colorsT, myRadioGroupPropsT } from "../../types/types";
import "./MyRadioGroup.scss";

export const colors: colorsT = {
  "In progress": "primary",
  Done: "success",
  Pending: "warning",
};

export default function MyRadioGroup({
  status,
  handleStatusChange,
}: myRadioGroupPropsT) {
  return (
    <RadioGroup
      value={status}
      onChange={handleStatusChange}
      className="task_radio_group"
    >
      {Object.entries(colors).map((stat: string[]) => (
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
  );
}

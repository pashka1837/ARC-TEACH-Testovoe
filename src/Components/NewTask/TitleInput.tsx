import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import { newTaskInpPropsT } from "../../types/types";

export default function TitleInput({
  inpVal,
  inpError,
  handleInpChange,
}: newTaskInpPropsT) {
  return (
    <FormControl error={inpError.taskTitle.error}>
      <FormLabel>Title</FormLabel>
      <Input
        onChange={handleInpChange}
        value={inpVal.taskTitle}
        name="taskTitle"
        type="text"
      />
      {inpError.taskTitle.error && (
        <FormHelperText>
          <InfoOutlined />
          Oops! Task title {inpError.taskTitle.errMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}

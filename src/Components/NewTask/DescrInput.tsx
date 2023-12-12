import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import { newTaskInpPropsT } from "../../types/types";

export default function DescrInput({
  inpVal,
  inpError,
  handleInpChange,
}: newTaskInpPropsT) {
  return (
    <FormControl error={inpError.desc.error}>
      <FormLabel>Description</FormLabel>
      <Textarea
        onChange={handleInpChange}
        value={inpVal.desc}
        name="desc"
        size="lg"
      />
      {inpError.desc.error && (
        <FormHelperText>
          <InfoOutlined />
          Oops! Description {inpError.desc.errMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}

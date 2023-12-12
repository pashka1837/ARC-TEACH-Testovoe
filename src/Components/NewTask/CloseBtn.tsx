import { IconButton } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch } from "react";

export default function CloseBtn({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <IconButton onClick={() => setOpen(false)}>
      <CloseIcon />
    </IconButton>
  );
}

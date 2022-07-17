import { forwardRef, SyntheticEvent, useState, FC } from "react";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

interface Props {
  open: boolean;
  message: string;
  status: AlertColor;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarToast: FC<Props> = ({ open, message, status }) => {
  const [openSnack, setOpen] = useState<boolean>(open);

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={status}
        sx={{
          width: "100%",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

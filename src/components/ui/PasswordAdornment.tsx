import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>
}

export const PasswordAdornment = ({ showPassword, setShowPassword }: Props): JSX.Element => {

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};

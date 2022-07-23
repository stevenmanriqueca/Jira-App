import { FC, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAuth } from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { PasswordAdornment } from "../ui";

type FormData = {
  email: string;
  password: string;
};

export const LoginTabContent: FC = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { loginUser, toggleLoading: isLoading } = useAuth()

  const { register, formState: { errors }, handleSubmit } = useForm<FormData>();

  const onSubmit = ({ email, password }: FormData) => loginUser({ email, password });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField autoFocus label="Email" variant="outlined" fullWidth
          {...register("email", {
            required: {
              value: true,
              message: "Email requiered",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "The email is incorrect",
            },
          })}
          disabled={isLoading}
          helperText={String(errors.email?.message || "")}
          error={Boolean(errors?.email)}
          autoComplete="off"
        />
        <TextField label="Password" variant="outlined" autoComplete="off"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 5,
              message: "The password must have at least 5 characters",
            },
          })}
          helperText={String(errors.password?.message || "")}
          error={Boolean(errors?.password)}
          disabled={isLoading}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword} />
            ),
          }}
        />
        <LoadingButton loading={isLoading} variant="contained" onClick={handleSubmit(onSubmit)} type="submit">
          Login
        </LoadingButton>
      </Stack>
    </form>
  );
};

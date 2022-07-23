import { Stack, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from '../../context/User/UserContext';
import { PasswordAdornment } from "../ui";
import { useAuth } from '../../hooks/useAuth';
import { LoadingButton } from "@mui/lab";

type FormData = {
    name: string;
    email: string;
    password: string;
};

export const RegisterTabContent = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { registerUser, toggleLoading: isLoading } = useAuth()

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => registerUser(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <TextField autoFocus label="Name" variant="outlined" fullWidth
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Name required",
                        },
                        minLength: {
                            value: 3,
                            message: "The name must have at least 3 characters",
                        },
                    })}
                    helperText={String(errors.name?.message || "")}
                    error={Boolean(errors?.name)}
                    autoComplete="off"
                    disabled={isLoading}
                />
                <TextField label="Email" variant="outlined" fullWidth
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
                    helperText={String(errors.email?.message || "")}
                    error={Boolean(errors?.email)}
                    autoComplete="off"
                    disabled={isLoading}
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
                    type={showPassword ? "text" : "password"}
                    disabled={isLoading}
                    InputProps={{
                        endAdornment: (
                            <PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword} />
                        ),
                    }}
                />
                <LoadingButton loading={isLoading} variant="contained" onClick={handleSubmit(onSubmit)}>
                    Register
                </LoadingButton>
            </Stack>
        </form>
    );
};
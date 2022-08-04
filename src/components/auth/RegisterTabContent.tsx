import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';
import { PasswordAdornment } from "../ui";

type FormData = {
    name: string;
    email: string;
    password: string;
};

export const RegisterTabContent = () => {

    const { registerUser } = useAuth()

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<FormData>();

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    InputProps={{
                        endAdornment: (
                            <PasswordAdornment showPassword={showPassword} setShowPassword={setShowPassword} />
                        ),
                    }}
                />
                <LoadingButton loading={isSubmitting} variant="contained" onClick={handleSubmit(onSubmit)}>
                    Register
                </LoadingButton>
            </Stack>
        </form>
    );
};
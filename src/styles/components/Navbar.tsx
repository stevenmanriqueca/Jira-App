import { Avatar, styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontWeight: "bold",
    color: theme.palette.primary.main,
}))

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    borderRadius: "30%",
    margin: "10px 5px",
    borderColor: theme.palette.error.main,
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
}))
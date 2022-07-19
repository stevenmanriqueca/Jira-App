import { Avatar, styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontWeight: "bold",
    color: theme.palette.primary.dark
}))

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    borderRadius: "30%",
    margin: "10px 5px",
    borderColor: theme.palette.primary.dark,
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
}))
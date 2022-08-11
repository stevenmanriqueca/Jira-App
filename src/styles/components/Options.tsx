import { Box, styled } from '@mui/material';


export const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: 3,
    [theme.breakpoints.up("xs")]: {
        flexDirection: "column",
        alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
    },
}))
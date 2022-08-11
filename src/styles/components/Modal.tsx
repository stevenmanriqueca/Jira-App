import { styled, Paper, Box, Typography } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    position: "absolute",
    width: 390,
    height: 300,
    padding: theme.spacing(4),
}))

export const StyledModalContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
        marginTop: "20%",
    },
    [theme.breakpoints.up("lg")]: {
        marginTop: "14%",
    },
}))

export const StyledContainerPaperEntry = styled(Paper)(({ theme }) => ({
    position: "absolute",
    height: 600,
    overflow: "scroll",
    [theme.breakpoints.up("xs")]: {
        padding: theme.spacing(1.6),
        width: 400,
    },
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
        width: 600,
    }
}))

export const StyledContainerEntry = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
        marginTop: "10%",
    },
    [theme.breakpoints.up("sm")]: {
        marginTop: "4%",
    },
}))

export const StyledModalTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginTop: theme.spacing(2),
}))
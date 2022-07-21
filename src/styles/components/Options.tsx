import { Box, styled, FormLabel } from '@mui/material';


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

export const StyledFormContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.up("xs")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
        flexDirection: "row",
    }
}))

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
    color: theme.palette.primary.dark,
    paddingRight: theme.spacing(2),
    fontSize: 17,
    [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(1),
    },
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(0),
    },

}))
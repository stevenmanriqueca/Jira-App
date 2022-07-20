import { Box, styled, FormLabel } from '@mui/material';



export const StyledFormContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-end"
}))

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
    color: theme.palette.primary.dark,
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    fontSize: 17
}))
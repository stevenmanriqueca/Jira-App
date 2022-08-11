import { Paper, styled } from '@mui/material';

export const StyledTabContainer = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '30%',
    [theme.breakpoints.up('xs')]: {
        width: '95%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '68%',
    },
    [theme.breakpoints.up('md')]: {
        width: '45%',
    },
}));
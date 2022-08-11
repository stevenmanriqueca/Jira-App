import { Box, Paper, styled, Typography } from "@mui/material";

export const StyledPaperColumn = styled(Paper)(({ theme }) => ({
    width: "calc(100% - 18px)",
    height: "calc(100vh - 15vh)",
    marginTop: theme.spacing(-0.9),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    overflow: "scroll",
    overflowX: "hidden",
    transition: "0.5s all",
}))

export const StyledTitleColumn = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
}))

export const StyledCardContainer = styled(Paper)(({ }) => ({
    borderRadius: "20px",
    margin: "7px",
    maxHeight: "300px",
    cursor: "grab",
}))

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "book",
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
}))

export const StyledCardDescription = styled(Typography)(({ }) => ({
    display: "-webkit-box",
    height: "100px",
    WebkitLineClamp: "4",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
}))

export const StyledCardTagsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    my: theme.spacing(0.6)
}))
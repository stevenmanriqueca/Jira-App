import { FC } from "react";
import { Grid, Paper, Stack, Typography, IconButton, Box } from "@mui/material"
import { DroppableStrict } from "../../hoc/DroppableStrict";
import { EntryCard } from "./";
import { Entry } from '../../interfaces/context-entries/index';
import { useOptions } from "../../hooks/useOptions";
import { useJiraBoard } from "../../hooks/useJiraBoard";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    columnId: string;
    nameColumn: string;
    itemsColumn: Entry[]
}

export const Column: FC<Props> = ({ columnId, nameColumn, itemsColumn }) => {
    const { idUser } = useJiraBoard()
    const { deleteColumn } = useOptions()
    return (
        <Grid item xs={12} sm={6} md={6} lg={4} key={columnId}>
            <Box sx={{ backgroundColor: "primary.dark", borderRadius: "10px", mx: 1 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ my: 2, ml: 3 }} >
                    <Typography variant="h4" align='left' sx={{ fontWeight: "bold", my: 3, color: "primary.main" }}>{nameColumn}</Typography>
                    <IconButton size="small" sx={{ m: 3.5 }}
                        onClick={() => deleteColumn(idUser, nameColumn)}
                    >
                        <DeleteIcon sx={{ color: "#b61818" }} />
                    </IconButton>
                </Stack>
            </Box>
            <DroppableStrict droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                    return (
                        <Paper elevation={1}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={{
                                width: "calc(100% - 18px)",
                                height: "calc(100vh - 15vh)",
                                mt: -0.9,
                                mx: 1,
                                mb: 2,
                                overflow: "scroll",
                                overflowX: "hidden",
                                transition: "0.5s all",
                                backgroundColor: snapshot.isDraggingOver
                                    ? "#4039414e" : "primary.dark"
                            }}>
                            {
                                itemsColumn.map((props, index) => (
                                    <Box key={props._id} sx={{ my: "14px", mx: "2px" }}>
                                        <EntryCard {...props} index={index} />
                                    </Box>
                                ))
                            }
                            {provided.placeholder}
                        </Paper>
                    )
                }}
            </DroppableStrict>
        </Grid>

    )
}

export default Column
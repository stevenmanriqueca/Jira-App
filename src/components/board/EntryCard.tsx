import { FC } from "react";
import { Paper, Stack, Typography, Box, IconButton, Chip } from "@mui/material"
import { Draggable } from "react-beautiful-dnd"
import { Entry } from "../../interfaces/context-entries";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useOptions } from '../../hooks/useOptions';

interface Props extends Entry {
    index: number;
}

export const EntryCard: FC<Props> = ({ index, _id, title, description, priority, userTags }) => {
    const { deleteEntry } = useOptions()
    return (
        <Draggable
            draggableId={_id}
            index={index}
        >
            {(provided) => {
                return (
                    <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        elevation={6}
                        sx={{
                            borderRadius: "20px",
                            margin: "7px",
                            maxHeight: "300px",
                            cursor: "grab",
                            ...provided.draggableProps.style,
                        }}>
                        <Stack direction="row" justifyContent="space-between" >
                            <Typography variant="h6" align='left' sx={{ fontWeight: "book", m: 2, color: "primary.main" }}>
                                {title}
                            </Typography>
                            <Box>
                                <IconButton size="small" sx={{ m: 1 }} >
                                    <EditIcon sx={{ color: "primary.main" }} />
                                </IconButton>
                                <IconButton size="small" sx={{ mr: 1 }} onClick={() => deleteEntry(_id)}>
                                    <DeleteIcon sx={{ color: "#b61818" }} />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box sx={{
                            width: "100%", height: "100px", px: 1.2,
                        }}>
                            <Typography variant="body1" sx={{
                                display: "-webkit-box",
                                height: "100px",
                                WebkitLineClamp: "4",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}>
                                {description}
                            </Typography>
                        </Box>
                        <Stack direction="row" mx={3} my={1}>
                            <Typography sx={{ m: 0.6, fontWeight: "bolder" }} variant="body1">Priority:</Typography>
                            <Chip label={priority} variant="outlined"
                                color={priority === "High" ? "error" : priority === "medium" ? "warning" : "success"} size="medium"
                            />
                        </Stack>
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", my: 0.6 }} >
                            {
                                userTags.map(({ _id, title }) => (
                                    <Chip sx={{ m: 0.8 }} key={_id} label={title} variant="outlined" color="primary" size="medium" />
                                ))
                            }
                        </Box>
                    </Paper>
                )
            }}
        </Draggable >
    )
}

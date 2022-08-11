import { FC } from "react";
import { Stack, Typography, Box, IconButton, Chip } from "@mui/material"
import { StyledCardContainer, StyledCardTitle, StyledCardDescription, StyledCardTagsContainer } from "../../styles/components";
import { Draggable } from "react-beautiful-dnd"
import { useModal } from "../../hooks/useModal";
import { useOptions } from "../../hooks/useOptions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Entry } from "../../interfaces/context/entries";

interface Props extends Entry {
    index: number;
}

export const EntryCard: FC<Props> = ({ index, _id, title, description, priority, userTags }) => {
    const { deleteEntry } = useOptions()
    const { openModalEditEntry } = useModal()
    return (
        <Draggable
            draggableId={_id}
            index={index}
        >
            {(provided) => {
                return (
                    <StyledCardContainer elevation={6} sx={{ ...provided.draggableProps.style }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Stack direction="row" justifyContent="space-between" >
                            <StyledCardTitle variant="h6" align='left'>
                                {title}
                            </StyledCardTitle>
                            <Box>
                                <IconButton size="small" sx={{ m: 1 }} onClick={() => openModalEditEntry(_id)}>
                                    <EditIcon sx={{ color: "primary.main" }} />
                                </IconButton>
                                <IconButton size="small" sx={{ mr: 1 }} onClick={() => deleteEntry(_id)} >
                                    <DeleteIcon sx={{ color: "#b61818" }} />
                                </IconButton>
                            </Box>
                        </Stack>
                        <Box sx={{ width: "100%", height: "100px", px: 1.2 }}>
                            <StyledCardDescription variant="body1">
                                {description}
                            </StyledCardDescription>
                        </Box>
                        <Stack direction="row" mx={3} my={1}>
                            <Typography sx={{ m: 0.6, fontWeight: "bolder" }} variant="body1">Priority:</Typography>
                            <Chip label={priority} color={priority === "High" ? "error" : priority === "Medium" ? "warning" : "success"} size="medium"
                            />
                        </Stack>
                        <StyledCardTagsContainer>
                            {
                                userTags.map(({ _id, title }) => (
                                    <Chip sx={{ m: 0.8 }} key={_id} label={title} color="primary" size="medium" variant="outlined" />
                                ))
                            }
                        </StyledCardTagsContainer>
                    </StyledCardContainer>
                )
            }}
        </Draggable >
    )
}
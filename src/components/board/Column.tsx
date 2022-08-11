import { FC } from "react";
import { Grid, Stack, IconButton, Box } from "@mui/material"
import { StyledPaperColumn, StyledTitleColumn } from "../../styles/components";
import { DroppableStrict } from "../../hoc/DroppableStrict";
import { useModal } from "../../hooks/useModal";
import { EntryCard } from "./";
import DeleteIcon from '@mui/icons-material/Delete';
import { Entry } from '../../interfaces/context/entries/index';

interface Props {
    columnId: string;
    nameColumn: string;
    itemsColumn: Entry[]
}

export const Column: FC<Props> = ({ columnId, nameColumn, itemsColumn }) => {
    const { openModalDeleteColumn } = useModal()

    return (
        <Grid item xs={12} sm={6} md={6} lg={4} key={columnId}>
            <Box sx={{ backgroundColor: "primary.dark", borderRadius: "10px", mx: 1 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ my: 2, ml: 3 }} >
                    <StyledTitleColumn variant="h4" align='left' >{nameColumn}</StyledTitleColumn>
                    <IconButton size="small" sx={{ m: 3.5 }} onClick={() => openModalDeleteColumn(nameColumn)}>
                        <DeleteIcon sx={{ color: "#b61818" }} />
                    </IconButton>
                </Stack>
            </Box>
            <DroppableStrict droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                    return (
                        <StyledPaperColumn elevation={1}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={{ backgroundColor: snapshot.isDraggingOver ? "#4039414e" : "primary.dark" }}>
                            {
                                itemsColumn.map((props, index) => (
                                    <Box key={props._id} sx={{ my: "14px", mx: "2px" }}>
                                        <EntryCard {...props} index={index} />
                                    </Box>
                                ))
                            }
                            {provided.placeholder}
                        </StyledPaperColumn>
                    )
                }}
            </DroppableStrict>
        </Grid>
    )
}

export default Column
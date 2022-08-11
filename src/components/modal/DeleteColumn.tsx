import { Modal, Fade, Button, Typography, Stack } from '@mui/material';
import { StyledModalContainer, StyledPaper, StyledModalTitle } from "../../styles/components"
import { useModal } from '../../hooks/useModal';
import { useOptions } from '../../hooks/useOptions';
import { useJiraBoard } from '../../hooks/useJiraBoard';

export const DeleteColumn = () => {
    const { open, nameColumn, handleCloseModal } = useModal()
    const { idUser } = useJiraBoard()
    const { deleteColumn } = useOptions()

    const handleDeleteColumn = () => {
        deleteColumn(idUser, nameColumn)
        handleCloseModal()
    }

    return (
        <Modal open={open} onClose={handleCloseModal} >
            <Fade in={open}>
                <StyledModalContainer>
                    <StyledPaper>
                        <StyledModalTitle align="center" color="error" variant="h4">
                            Are you sure?
                        </StyledModalTitle>
                        <Typography variant="h5" my={2} >
                            Deleting the column will delete all entries, do you want to continue?
                        </Typography>
                        <Stack justifyContent="space-between" direction="row" mt={4}>
                            <Button onClick={handleCloseModal}>Cancel</Button>
                            <Button onClick={handleDeleteColumn}>Accept</Button>
                        </Stack>
                    </StyledPaper>
                </StyledModalContainer>
            </Fade>
        </Modal>
    )
}

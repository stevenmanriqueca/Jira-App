import { Button, Fade, Modal, Stack, TextField } from "@mui/material"
import { StyledModalContainer, StyledPaper, StyledModalTitle } from "../../styles/components"
import { useForm } from "react-hook-form"
import { useJiraBoard } from "../../hooks/useJiraBoard"
import { useOptions } from "../../hooks/useOptions"
import { useModal } from '../../hooks/useModal';

export const NewColumn = () => {

    const { idUser, columnsJira } = useJiraBoard()
    const { addNewColumn } = useOptions()
    const { open, handleCloseModal } = useModal()
    const { handleSubmit, register, setError, formState: { errors } } = useForm<{ titleNewColumn: string }>()

    const validateExistColumn = ({ titleNewColumn }: { titleNewColumn: string }) => {
        if (columnsJira.includes(titleNewColumn)) {
            return setError("titleNewColumn", {
                message: "A column with this name already exists"
            })
        }
        addNewColumn(idUser, [titleNewColumn])
        handleCloseModal()
    }

    return (
        <Modal open={open} onClose={handleCloseModal} >
            <Fade in={open}>
                <form onSubmit={handleSubmit(validateExistColumn)}>
                    <StyledModalContainer>
                        <StyledPaper>
                            <Stack spacing={3}>
                                <StyledModalTitle variant="h4" align="center" color="primary">
                                    Column Name :
                                </StyledModalTitle>
                                <TextField
                                    inputProps={{ style: { textAlign: 'center' } }}
                                    {...register("titleNewColumn", {
                                        minLength: {
                                            value: 4,
                                            message: "Must have at least 4 characters"
                                        }
                                    })}
                                    fullWidth
                                    autoFocus
                                    autoComplete="off"
                                    error={Boolean(errors.titleNewColumn)}
                                    helperText={errors.titleNewColumn?.message}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    onClick={handleSubmit(validateExistColumn)} >
                                    Accept
                                </Button>
                            </Stack>
                        </StyledPaper>
                    </StyledModalContainer>
                </form>
            </Fade>
        </Modal>
    )
}
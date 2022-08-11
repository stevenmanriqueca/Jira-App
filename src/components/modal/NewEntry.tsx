import { KeyboardEvent, FC, useState, useContext } from "react"
import { v4 as uuid } from "uuid"
import { useForm } from "react-hook-form"
import { Modal, Fade, Stack, TextField, Typography, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Box, Button, Chip } from "@mui/material"
import { useModal } from "../../hooks/useModal"
import { useJiraBoard } from "../../hooks/useJiraBoard"
import { StyledContainerEntry, StyledContainerPaperEntry } from "../../styles/components"
import { UserTag } from "../../interfaces/context/entries"
import { EntriesContext } from "../../context/Entries/EntriesContext"

interface Data {
    title: string;
    description: string;
    priority: string;
    status: string;
}

export const NewEntry: FC = () => {

    const { newEntry } = useContext(EntriesContext)
    const [tags, setTags] = useState<UserTag[]>([])
    const { open, handleCloseModal } = useModal()
    const { register, formState: { errors }, handleSubmit } = useForm<Data>();
    const { columnsJira } = useJiraBoard()

    const handleDeleteTag = (idTag: string) => setTags(tags.filter(({ _id }) => _id !== idTag))

    const handleAddTag = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" && (event.target as HTMLInputElement).value.length > 0) {
            event.preventDefault()
            setTags([{ _id: uuid(), title: (event.target as HTMLInputElement).value }, ...tags])
            return (event.target as HTMLInputElement).value = ""
        }
    }

    const onSubmit = (data: Data) => {
        handleCloseModal()
        const entry = {
            ...data,
            userTags: tags.map(({ _id, ...rest }) => rest)
        }
        newEntry(entry)
    }

    return (
        <Modal open={open} onClose={handleCloseModal} disableScrollLock={true} >
            <Fade in={open}>
                <StyledContainerEntry>
                    <StyledContainerPaperEntry>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={2}>
                                <TextField autoComplete="off" fullWidth variant="standard" placeholder="Title"
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "Title is required",
                                        },
                                    })}
                                    error={Boolean(errors?.title)}
                                    inputProps={{ style: { textAlign: "center" } }}
                                />
                                {
                                    Boolean(errors?.title) &&
                                    <Typography sx={{ m: 90 }} variant="caption" align="center" color="error">
                                        {String(errors.title?.message)}
                                    </Typography>
                                }
                            </Stack>
                            <Stack spacing={4} m={3}>
                                <TextField multiline fullWidth placeholder="Description"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is required",
                                        },
                                    })}
                                    error={Boolean(errors?.description)}
                                    helperText={String(errors.description?.message || "")}
                                />
                                <FormControl sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <FormLabel sx={{ mt: 1.2, mr: 2, fontWeight: "bolder" }}>
                                        Priority:
                                    </FormLabel>
                                    <RadioGroup {...register("priority")} row defaultValue="Low">
                                        {
                                            ["Low", "Medium", "High"].map((status) => (
                                                <FormControlLabel {...register("priority")} key={status} value={status} control={<Radio />} label={status} />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel sx={{ textAlign: "center", fontWeight: "bolder" }}> Status</FormLabel>
                                    <RadioGroup {...register("status")} defaultValue={columnsJira[0]} row sx={{ display: "flex", justifyContent: "center" }}>
                                        {
                                            columnsJira.map((columnName) => (
                                                <FormControlLabel {...register("status")} key={columnName} value={columnName} control={<Radio />} label={columnName} />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    id="inputTag"
                                    placeholder="Add Tag"
                                    autoComplete="off"
                                    onKeyDown={handleAddTag}
                                    inputProps={{ style: { textAlign: "center" } }}
                                    disabled={tags.length >= 5}
                                    variant="outlined"
                                />
                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                                    {
                                        tags.map(({ title, _id }) => (
                                            <Chip
                                                key={_id}
                                                label={title}
                                                onDelete={() => handleDeleteTag(_id)}
                                                color="primary" size="medium"
                                                sx={{ m: 0.8 }}
                                            />
                                        ))
                                    }
                                </Box>
                                <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                                    Create
                                </Button>
                            </Stack>
                        </form>
                    </StyledContainerPaperEntry>
                </StyledContainerEntry>
            </Fade>
        </Modal>
    )
}
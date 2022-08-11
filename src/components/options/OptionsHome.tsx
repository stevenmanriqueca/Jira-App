import { Button, Stack } from "@mui/material"
import { useJiraBoard } from '../../hooks/useJiraBoard';
import { StyledContainer } from '../../styles/components/Options';
import { useModal } from "../../hooks/useModal";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export const OptionsHome = () => {
    const { openModalNewColumn, openModalNewEntry } = useModal()
    const { columnsJira } = useJiraBoard()

    return (
        <StyledContainer>
            <Stack direction="row" spacing={1} sx={{ padding: { xs: 2, sm: 2 } }}>
                <Button variant="outlined"
                    startIcon={<AddOutlinedIcon />}
                    disabled={columnsJira.length === 0}
                    onClick={() => openModalNewEntry()}
                >
                    New Entry
                </Button>
                <Button variant="outlined"
                    startIcon={<DashboardCustomizeIcon />}
                    disabled={columnsJira.length >= 5}
                    onClick={openModalNewColumn}
                >
                    Add Column
                </Button>
            </Stack>
        </StyledContainer>
    )
}
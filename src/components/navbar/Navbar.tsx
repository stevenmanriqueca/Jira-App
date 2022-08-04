import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { StyledAvatar, StyledTitle } from "../../styles/components";

export const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "primary.light" }}>
            <Toolbar>
                <StyledTitle variant="h5">
                    Jira - App
                </StyledTitle>

                <Tooltip title="Jira" arrow>
                    <StyledAvatar>
                        <IconButton size="large" aria-haspopup="true" sx={{ color: "primary.main" }}>
                            <TipsAndUpdatesOutlinedIcon />
                        </IconButton>
                    </StyledAvatar>
                </Tooltip>

                <Tooltip title="Notes" arrow>
                    <StyledAvatar>
                        <IconButton size="large" aria-haspopup="true" sx={{ color: "primary.main" }}>
                            <TextSnippetOutlinedIcon />
                        </IconButton>
                    </StyledAvatar>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

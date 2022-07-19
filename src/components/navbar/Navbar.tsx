import { AppBar, IconButton, Toolbar } from "@mui/material";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { StyledAvatar, StyledTitle } from "../../styles/components";

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <StyledTitle variant="h5">
                    Jira - App
                </StyledTitle>

                <StyledAvatar>
                    <IconButton size="large" aria-haspopup="true" sx={{ color: "primary.dark" }}>
                        <TipsAndUpdatesOutlinedIcon />
                    </IconButton>
                </StyledAvatar>

                <StyledAvatar>
                    <IconButton size="large" aria-haspopup="true" sx={{ color: "primary.dark" }}>
                        <TextSnippetOutlinedIcon />
                    </IconButton>
                </StyledAvatar>
            </Toolbar>
        </AppBar>
    )
}

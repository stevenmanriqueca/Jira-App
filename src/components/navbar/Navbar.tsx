import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { StyledAvatar, StyledTitle } from "../../styles/components";

export const Navbar = () => {
    const { onLogout } = useAuth()
    return (
        <AppBar position="static" sx={{ backgroundColor: "primary.light" }}>
            <Toolbar>
                <StyledTitle variant="h5">
                    Jira - App
                </StyledTitle>

                <Tooltip title="Logout" arrow onClick={onLogout}>
                    <StyledAvatar>
                        <IconButton size="large" aria-haspopup="true" color="error">
                            <LogoutOutlinedIcon />
                        </IconButton>
                    </StyledAvatar>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

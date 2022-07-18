import { AppBar, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexgrow: 1 }} >Jira</Typography>
            </Toolbar>
        </AppBar>
    )
}

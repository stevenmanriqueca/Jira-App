import { UserProvider } from "./context/User/UserProvider"
import { AppTheme } from "./styles/theme"
import { SnackbarProvider } from "notistack"
import { MainContainer } from "./containers"
import "./styles/globals.css"

const JiraApp = () => {
    return (
        <AppTheme>
            <SnackbarProvider maxSnack={3}>
                <UserProvider>
                    <MainContainer />
                </UserProvider>
            </SnackbarProvider>
        </AppTheme>
    )
}

export default JiraApp
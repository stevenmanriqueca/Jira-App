import { useState } from "react"
import { UserProvider } from "./context/User/UserProvider"
import { AppTheme } from "./styles/theme"
import { SnackbarProvider } from "notistack"
import { AuthRouter, MainRouter } from "./router"
import "./styles/globals.css"


const JiraApp = () => {
    const [isAuth, setisAuth] = useState(false)
    return (
        <AppTheme>
            <SnackbarProvider maxSnack={3}>
                <UserProvider>
                    {
                        isAuth === true ? <MainRouter /> : <AuthRouter />
                    }
                </UserProvider>
            </SnackbarProvider>
        </AppTheme>
    )
}

export default JiraApp
import { useState } from "react"
import { UserProvider } from "./context/User/UserProvider"
import { AuthRouter, MainRouter } from "./router"
import "./styles/globals.css"
import { AppTheme } from "./styles/theme"


const JiraApp = () => {
    const [isAuth, setisAuth] = useState(true)
    return (
        <AppTheme>
            <UserProvider>
                {
                    isAuth === true ? <MainRouter /> : <AuthRouter />
                }
            </UserProvider>
        </AppTheme>
    )
}

export default JiraApp
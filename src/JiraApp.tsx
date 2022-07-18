import { useState } from "react"
import { UserProvider } from "./context/User/UserProvider"
import { AuthRouter, MainRouter } from "./router"
import "./styles/globals.css"


const JiraApp = () => {
    const [isAuth, setisAuth] = useState(true)
    return (
        <UserProvider>
            {
                isAuth === true ? <MainRouter /> : <AuthRouter />
            }
        </UserProvider>
    )
}

export default JiraApp
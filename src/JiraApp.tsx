import { UserProvider } from "./context/User/UserProvider"
import { AppRouter } from "./router/AppRouter"
import "./styles/globals.css"

const JiraApp = () => {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    )
}

export default JiraApp
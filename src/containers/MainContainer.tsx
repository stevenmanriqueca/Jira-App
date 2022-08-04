import { useEffect } from "react"
import { BackdropLoading } from "../components/ui"
// import { JiraProvider } from "../context/Jira/JiraProvider"
import { useAuth } from "../hooks/useAuth"
import { MainRouter, AuthRouter } from "../router"

export const MainContainer = () => {
    const { checkAuthToken, status, isValidating } = useAuth()


    useEffect(() => {
        checkAuthToken()
    }, [])

    if (isValidating) {
        return (
            <BackdropLoading isValidating={isValidating} />
        )
    }

    return (
        <>
            {
                status === "Authorized" ? (
                    // <JiraProvider>
                    <MainRouter />
                    // </JiraProvider>
                ) : <AuthRouter />
            }
        </>
    )
}

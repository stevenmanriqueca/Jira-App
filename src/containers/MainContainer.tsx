import { useAuth } from "../hooks/useAuth"
import { MainRouter, AuthRouter } from "../router"

export const MainContainer = () => {
    const { isAuthenticated } = useAuth()
    return (
        <>
            {
                isAuthenticated ? <MainRouter /> : <AuthRouter />
            }
        </>
    )
}

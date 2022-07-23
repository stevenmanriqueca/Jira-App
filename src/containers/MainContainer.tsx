import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { MainRouter, AuthRouter } from "../router"

export const MainContainer = () => {
    const { checkAuthToken, status } = useAuth()

    useEffect(() => {
        checkAuthToken()
    }, [])

    return (
        <>
            {
                status === "Authorized" ? <MainRouter /> : <AuthRouter />
            }
        </>
    )
}

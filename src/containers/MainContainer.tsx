import { useEffect } from "react"
import { BackdropLoading } from "../components/ui"
import { EntriesProvider } from "../context/Entries/EntriesProvider"
import { ModalProvider } from "../context/Modal/ModalProvider"
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
                    <EntriesProvider>
                        <ModalProvider>
                            <MainRouter />
                        </ModalProvider>
                    </EntriesProvider>
                ) : <AuthRouter />
            }
        </>
    )
}

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/User/UserContext';

export const useAuth = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const { loginUser, registerUser, state } = useContext(UserContext)
    const { user: { id }, ui: { toggleLoading } } = state

    useEffect(() => {
        if (id) {
            setIsAuthenticated(true)
        }
    }, [id])


    return { loginUser, registerUser, toggleLoading, isAuthenticated }
}
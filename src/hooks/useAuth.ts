import { useContext } from 'react';
import { UserContext } from '../context/User/UserContext';

export const useAuth = () => {
    const { loginUser, registerUser, state } = useContext(UserContext)
    const { user, ui: { toggleLoading } } = state
    return { loginUser, registerUser, toggleLoading }
}
import { useContext, useState } from 'react';
import { jiraApi } from '../api';
import { UserContext } from '../context/User/UserContext';
import { UserData } from '../interfaces/context-user/index';

export const useAuth = () => {

    const { loginUser, registerUser, onLogout, renewToken, state } = useContext(UserContext)
    const { ui: { toggleLoading }, user: { status } } = state

    const checkAuthToken = async () => {
        const token = localStorage.getItem("token")
        if (!token) return onLogout()
        try {
            const { data } = await jiraApi.get<UserData>("/user/renew");
            localStorage.setItem("token", token)
            renewToken(data)
        }
        catch (err) {
            localStorage.clear()
            onLogout()
        }
    }

    return { loginUser, registerUser, toggleLoading, checkAuthToken, status }
}
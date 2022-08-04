import { createContext } from 'react';
import { StateUser, Login } from '../../interfaces/context-user';
import { Register, UserData } from '../../interfaces/context-user/index';

export type ContextProps = {
    state: StateUser;
    loginUser: (data: Login) => void;
    registerUser: (data: Register) => void;
    renewToken: (data: UserData) => void;
    addNewColumn: (idUser: string, nameColumn: string[]) => void;
    onLogout: () => void;
};

export const UserContext = createContext<ContextProps>({} as ContextProps);
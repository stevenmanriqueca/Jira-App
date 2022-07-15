import { createContext } from 'react';
import { State, Login } from '../../interfaces/context-user';
import { Register } from '../../interfaces/context-user/index';

export type ContextProps = {
  state: State;
  loginUser: (data: Login) => void;
  registerUser: (data: Register) => void;
};

export const UserContext = createContext<ContextProps>({} as ContextProps);

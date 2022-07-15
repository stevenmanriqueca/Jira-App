import { ReactNode, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { State } from '../../interfaces/context-user';
import { Login, UserData, Register } from '../../interfaces/context-user/index';
import jiraApi from '../../api/jiraApi';

const initialState: State = {
  user: {
    id: '',
    name: '',
    columnsJira: [],
    token: '',
  },
  ui: {
    error: {
      message: '',
    },
    loading: false,
  },
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = async ({ email, password }: Login) => {
    try {
      dispatch({ type: "cleanError" })
      const { data } = await jiraApi.post<UserData>('/user', { email, password });
      dispatch({ type: 'userLogin', payload: data });
    } catch (error) {
      dispatch({ type: 'userError', payload: { message: 'Email or password incorrect!' } });
    }
  };

  const registerUser = async ({ email, name, password }: Register) => {
    try {
      dispatch({ type: "cleanError" })
      const { data } = await jiraApi.post<UserData>('/user/register', { email, name, password });
      dispatch({ type: 'registerUser', payload: data });
    } catch (error) {
      dispatch({ type: 'userError', payload: { message: 'An error has ocurred, Please try again.' } });
    }
  }

  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

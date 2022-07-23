import { ReactNode, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { State } from '../../interfaces/context-user';
import { useSnackbar } from 'notistack';
import jiraApi from '../../api/jiraApi';
import { Login, UserData, Register } from '../../interfaces/context-user/index';

const initialState: State = {
  user: {
    id: '',
    name: '',
    columnsJira: [],
    token: '',
  },
  ui: {
    toggleLoading: false,
  },
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { enqueueSnackbar } = useSnackbar()

  const loginUser = async ({ email, password }: Login) => {
    try {
      dispatch({ type: "toggleLoading" })
      const { data } = await jiraApi.post<UserData>('/user', { email, password });
      dispatch({ type: 'userLogin', payload: data });
      enqueueSnackbar(`Welcome ${data.name}.`, { variant: "success" })
    } catch (error) {
      enqueueSnackbar("Email or Password incorrect.", { variant: "error" })
    } finally {
      dispatch({ type: "toggleLoading" })
    }
  };

  const registerUser = async ({ email, name, password }: Register) => {
    try {
      dispatch({ type: "toggleLoading" })
      const { data } = await jiraApi.post<UserData>('/user/register', { email, name, password });
      dispatch({ type: 'registerUser', payload: data });
      enqueueSnackbar(`Welcome ${data.name}.`, { variant: "success" })
    } catch (error) {
      dispatch({ type: "toggleLoading" })
      enqueueSnackbar("An error has ocurred, Please try again.", { variant: "error" })
    } finally {
      dispatch({ type: "toggleLoading" })
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

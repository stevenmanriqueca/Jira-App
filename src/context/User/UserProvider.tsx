import { ReactNode, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import jiraApi from '../../api/jiraApi';
import { State, Login, UserData, Register } from '../../interfaces/context-user';

const initialState: State = {
  user: {
    id: '',
    name: '',
    columnsJira: [],
    token: '',
    status: "unAuthorized",
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
      localStorage.setItem("token", data.token)
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
      localStorage.setItem("token", data.token)
    } catch (error) {
      enqueueSnackbar("An error has ocurred, Please try again.", { variant: "error" })
    } finally {
      dispatch({ type: "toggleLoading" })
    }
  }

  const renewToken = (data: UserData) => {
    dispatch({ type: "userLogin", payload: data })
  }

  const onLogout = () => {
    console.log("logout")
    dispatch({ type: "onLogout" })
  }

  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
        registerUser,
        renewToken,
        onLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

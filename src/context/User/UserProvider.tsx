import { ReactNode, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import jiraApi from '../../api/jiraApi';
import { StateUser, Login, UserData, Register } from '../../interfaces/context/user';

const initialState: StateUser = {
  user: {
    id: '',
    name: '',
    columnsJira: [],
    token: '',
    status: "unAuthorized",
  },
  isValidating: true,
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { enqueueSnackbar } = useSnackbar()

  const loginUser = async ({ email, password }: Login) => {
    try {
      const { data } = await jiraApi.post<UserData>('/user', { email, password });
      localStorage.setItem("token", data.token)
      dispatch({ type: 'userLogin', payload: data });
      enqueueSnackbar(`Welcome ${data.name}.`, { variant: "success" })
    } catch (error) {
      enqueueSnackbar("Email or Password incorrect.", { variant: "error" })
    }
  };

  const registerUser = async ({ email, name, password }: Register) => {
    try {
      const { data } = await jiraApi.post<UserData>('/user/register', { email, name, password });
      dispatch({ type: 'registerUser', payload: data });
      enqueueSnackbar(`Welcome ${data.name}.`, { variant: "success" })
      localStorage.setItem("token", data.token)
    } catch (error) {
      enqueueSnackbar("An error has ocurred, Please try again.", { variant: "error" })
    }
  }

  const addNewColumn = async (idUser: string, newColumns: string[]) => {
    try {
      await jiraApi.post(`/user/addColumn/${idUser}`, { newColumns })
      dispatch({ type: "addNewColumn", payload: newColumns })
      enqueueSnackbar(`Column created!`, { variant: "success" })
    } catch (error) {
      enqueueSnackbar("An error has ocurred, Please try again.", { variant: "error" })
    }
  }

  const deleteColumn = async (idUser: string, nameColumn: string) => {
    try {
      await jiraApi.post(`/user/addColumn/${idUser}`, { nameColumn })
      dispatch({ type: "deleteColumn", payload: nameColumn })
      enqueueSnackbar(`Column deleted!`, { variant: "success" })
    } catch (error) {
      enqueueSnackbar("An error has ocurred, Please try again.", { variant: "error" })
    }
  }

  const renewToken = (data: UserData) => dispatch({ type: "userLogin", payload: data })

  const onLogout = () => {
    dispatch({ type: "onLogout" })
    localStorage.clear()
  }

  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
        registerUser,
        renewToken,
        addNewColumn,
        deleteColumn,
        onLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { UserData, StateUser } from '../../interfaces/context-user/index';

type userAction =
  | { type: 'userLogin', payload: UserData }
  | { type: "registerUser", payload: UserData }
  | { type: "renewTokenUser", payload: string }
  | { type: "addNewColumn", payload: string[] }
  | { type: "onLogout" }

export const userReducer = (state: StateUser, action: userAction): StateUser => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        user: { ...action.payload, status: "Authorized" },
        isValidating: false,
      };

    case "registerUser":
      return {
        ...state,
        user: { ...action.payload, status: "Authorized" },
      };

    case "addNewColumn":
      return {
        ...state,
        user: {
          ...state.user,
          columnsJira: [...state.user.columnsJira, ...action.payload]
        }
      }

    case "onLogout": {
      return {
        ...state,
        user: { id: "", name: "", columnsJira: [], token: "", status: "unAuthorized" },
        isValidating: false,
      }
    }

    default:
      return state;
  }
};

import { State, UserData } from '../../interfaces/context-user/index';

type userAction =
  | { type: 'userLogin', payload: UserData }
  | { type: "registerUser", payload: UserData }
  | { type: "renewTokenUser", payload: string }
  | { type: "toggleLoading" }
  | { type: "onLogout" }

export const userReducer = (state: State, action: userAction): State => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        user: { ...action.payload, status: "Authorized" },
      };

    case "registerUser":
      return {
        ...state,
        user: { ...action.payload, status: "Authorized" },
      };

    case "toggleLoading": {
      return {
        ...state,
        ui: {
          toggleLoading: !state.ui.toggleLoading
        }
      }
    }

    case "onLogout": {
      return {
        ...state,
        user: { id: "", name: "", columnsJira: [], token: "", status: "unAuthorized" }
      }
    }

    default:
      return state;
  }
};

import { State, UserData } from '../../interfaces/context-user/index';

type userAction =
  | { type: 'userLogin', payload: UserData }
  | { type: "registerUser", payload: UserData }
  | { type: "toggleLoading" }

export const userReducer = (state: State, action: userAction): State => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        user: { ...action.payload },
      };

    case "registerUser":
      return {
        ...state,
        user: { ...action.payload }
      };

    case "toggleLoading": {
      return {
        ...state,
        ui: {
          toggleLoading: !state.ui.toggleLoading
        }
      }
    }

    default:
      return state;
  }
};

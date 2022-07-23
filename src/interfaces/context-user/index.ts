export interface State {
  user: UserData;
  ui: UI;
}

interface UI {
  toggleLoading: boolean;
}

export interface UserData {
  id: string;
  name: string;
  columnsJira: string[];
  token: string;
  status: userStatus
}

type userStatus = | "Authorized" | "unAuthorized"

export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  name: string;
}
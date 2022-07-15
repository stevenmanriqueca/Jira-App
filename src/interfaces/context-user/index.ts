export interface State {
  user: UserData;
  ui: UI;
}

interface UI {
  loading: boolean;
  error: {
    message: string;
  };
}

export interface UserData {
  id: string;
  name: string;
  columnsJira: string[];
  token: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  name: string;
}
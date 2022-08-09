export interface StateUser {
  user: UserData;
  isValidating: boolean;
}

export interface UserData {
  id: string;
  name: string;
  columnsJira: string[];
  token: string;
  status: userStatus
}

type userStatus = | "Authorized" | "unAuthorized"

export interface Register {
  email: string;
  password: string;
  name: string;
}

export interface Login extends Omit<Register, "name"> {
}
import {User} from "./user";

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}


export interface LoginResponse {
  user: User;
  accessToken: string;
}

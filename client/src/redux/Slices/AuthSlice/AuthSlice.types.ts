export interface UserLoginType {
  email: string,
  password: string,
} 
export interface UserRegistrationType extends UserLoginType {
  name: string
}

export interface IUser {
  email: string,
  id: string,
  name: string,
  lastname?: string,
  birthday?: string,
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}


export interface AuthStateTypes {
  loading: boolean,
  error: unknown | string,
  isAuth: boolean,
  user: IUser,
}
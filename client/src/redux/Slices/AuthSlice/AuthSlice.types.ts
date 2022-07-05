export interface UserLoginType {
  email: string,
  password: string,
} 
export interface IUser extends UserLoginType {
  name: string
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
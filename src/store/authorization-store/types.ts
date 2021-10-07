export type AuthData = {
  login: string
  password: string
}

export interface IAuthState {
  data: AuthData
}
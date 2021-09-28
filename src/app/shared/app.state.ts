
export interface appState {
  username: string,
  password: string,
  error: string
}

export const initialAppState: appState = {
  username: '',
  password: '',
  error: ''
}

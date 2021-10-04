import { initialAppState, appState } from './app.state';
import { createAction, createReducer, on, props } from '@ngrx/store';
import * as userActions from './user.actions';

export const userReducer = createReducer<appState>(
  initialAppState,
  on(userActions.doLogin, (state,action): appState => {
    return {
      ...state,
      username: action.username,
      password: action.password
    }
  }),
  on(userActions.doLogout, (state,action): appState => {
    return {
      ...state,
      username: '',
      password: ''
    }
  })
);

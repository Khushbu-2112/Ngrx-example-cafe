import { initialAppState, appState } from './app.state';
import { createAction, createReducer, on, props } from '@ngrx/store';

export const userReducer = createReducer<appState>(
  initialAppState,
  on(createAction('[Login] Login Request',props<{ username: string; password: string }>()), (state,action): appState => {
    return {
      ...state,
      username: action.username,
      password: action.password
    }
  })
);

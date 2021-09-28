import { initialAppState } from './app.state';
import { createAction, createReducer, on, props } from '@ngrx/store';

export const userReducer = createReducer(
  initialAppState,
  on(createAction('[Login] Login Request',props<{ username: string; password: string }>()), (state,action) => {
    return {
      ...state,
      username: action.username,
      password: action.password
    }
  })
);

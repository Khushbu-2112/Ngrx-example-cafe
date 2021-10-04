import { createAction, props } from "@ngrx/store";

export const doLogin = createAction(
  '[Login] Login Request',
  props<{ username: string; password: string }>()
);

export const doLogout = createAction(
  '[Login] Logout Request',
);

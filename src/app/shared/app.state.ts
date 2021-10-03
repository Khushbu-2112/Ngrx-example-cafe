import { createFeatureSelector, createSelector } from "@ngrx/store";

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

const getappFeatureState = createFeatureSelector<appState>('user');

export const getUser = createSelector(
  getappFeatureState,
  state => state.username
);

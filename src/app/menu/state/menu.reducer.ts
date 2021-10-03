import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import * as mainState from "src/app/shared/app.state";

// to maintain lazy loading extend app state to have menu items in menu module like shown below
export interface appState extends mainState.appState{
  menuItems: MenuState;
}

export interface MenuState{
  menuItems: Array<MenuItem>;
  showMenuStock: boolean;
}

const initialMenuState: MenuState = {
  menuItems: [],
  showMenuStock:false
}

export interface MenuItem{
  id: string;
  name: string;
  type: itemType;
  stock: number;
  price: number;
}

export enum itemType{
  Beverage,
  Snacks
}

const getMenuFeatureState = createFeatureSelector<MenuState>('menu');

export const getMenuStock = createSelector(
  getMenuFeatureState,
  state => state.showMenuStock
);

export const getMenuItems = createSelector(
  getMenuFeatureState,
  state => state.menuItems
);

export const menuReducer = createReducer<MenuState>(
  initialMenuState,

);

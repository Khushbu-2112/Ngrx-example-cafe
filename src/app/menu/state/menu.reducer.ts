import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as mainState from "src/app/shared/app.state";
import * as menuActions from './menu.actions';

export enum itemType{
  Beverage,
  Snacks
}

const menuItems:Array<MenuItem> = [
  {
    id: 1,
    name: 'Cocktail',
    type: itemType.Beverage,
    price: 30,
    stock: 5
  },
  {
    id: 2,
    name: 'Cold Coffee',
    type: itemType.Beverage,
    price: 20,
    stock: 4
  },
  {
    id: 3,
    name: 'Coca Cola',
    type: itemType.Beverage,
    price: 15,
    stock: 6
  },
  {
    id: 4,
    name: 'Samosa',
    type: itemType.Snacks,
    price: 16,
    stock: 5
  },
  {
    id: 5,
    name: 'Pizza',
    type: itemType.Snacks,
    price: 50,
    stock: 3
  },
  {
    id: 6,
    name: 'Sandwich',
    type: itemType.Snacks,
    price: 25,
    stock: 6
  }
];


// to maintain lazy loading extend app state to have menu items in menu module like shown below
export interface appState extends mainState.appState{
  menuItems: MenuState;
}

export interface MenuState{
  menuItems: Array<MenuItem>;
  showMenuStock: boolean;
  currentMenuItemId:number;
}

const initialMenuState: MenuState = {
  menuItems: menuItems,
  showMenuStock:false,
  currentMenuItemId: null
}

export interface MenuItem{
  id: number;
  name: string;
  type: itemType;
  stock: number;
  price: number;
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

export const getcurrentMenuItemId = createSelector(
  getMenuFeatureState,
  state => state.currentMenuItemId
);

export const getCurrentMenuItem = createSelector(
  getMenuFeatureState,
  getcurrentMenuItemId,
  (state, currentMenuItemId) => {
    if(currentMenuItemId == 0){
      return {
        id: 0,
        name: '',
        type: 0,
        stock: null,
        price: null
      };
    }else{
      return currentMenuItemId ? state.menuItems.find(m => m.id === currentMenuItemId): null;
    }
  }
)

export const menuReducer = createReducer<MenuState>(
  initialMenuState,
  on(menuActions.toggleShowStocks, (state):MenuState => {
    return {
      ...state,
      showMenuStock: !state.showMenuStock
    };
  }),
  on(menuActions.loadMenuItems, (state):MenuState => {
    return {
      ...state,
      menuItems: state.menuItems
    };
  }),
  on(menuActions.initializeMenuItem, (state): MenuState => {
    return {
      ...state,
      currentMenuItemId: 0
    };
  }),
  on(menuActions.setCurrentItem, (state, action): MenuState => {
    return {
      ...state,
      currentMenuItemId: action.currentMenuItemId
    };
  }),
  on(menuActions.clearCurrentItem, (state): MenuState => {
    return {
      ...state,
      currentMenuItemId: null
    };
  }),
  on(menuActions.createItem, (state, action): MenuState => {
    return {
      ...state,
      menuItems: [...state.menuItems, action.item],
      currentMenuItemId: action.item.id
    };
  }),
  on(menuActions.updateMenuItem, (state, action): MenuState => {
    const updatedItems = state.menuItems.map(
      item => action.item.id === item.id ? action.item : item);
    return {
      ...state,
      menuItems: updatedItems,
      currentMenuItemId: action.item.id
    };
  }),
  on(menuActions.deleteItem, (state, action): MenuState => {
    return {
      ...state,
      menuItems: state.menuItems.filter(item => item.id !== action.currentMenuItemId),
      currentMenuItemId: null
    };
  }),
);


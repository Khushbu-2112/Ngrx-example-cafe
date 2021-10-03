import { createAction, props } from "@ngrx/store";
import { MenuItem } from "./menu.reducer";

export const toggleShowStocks = createAction(
  '[Menu] Toggle Menu Show Stocks',
);

export const initializeMenuItem = createAction(
  '[Menu] Initialize Menu Item',
);

export const loadMenuItems = createAction(
  '[Menu] Load Menu Items',
);

export const setCurrentItem = createAction(
  '[Menu Page] Set Current Item',
  props<{ currentMenuItemId: number }>()
);

export const clearCurrentItem = createAction(
  '[Menu Page] Clear Current Item'
);

export const updateMenuItem = createAction(
  '[Menu] Update Menu Item',
  props<{item:MenuItem}>()
);

export const createItem = createAction(
  '[Menu Page] Create Item',
  props<{ item: MenuItem }>()
);

export const deleteItem = createAction(
  '[Menu Page] Delete Item',
  props<{ currentMenuItemId: number }>()
);

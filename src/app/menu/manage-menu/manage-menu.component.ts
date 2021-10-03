import { getCurrentMenuItem, getMenuItems, getMenuStock } from './../state/menu.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, createReducer } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem, MenuState } from '../state/menu.reducer';
import * as MenuActions from '../state/menu.actions';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  menuItems$:Observable<Array<MenuItem>>;
  displayStock$: Observable<boolean>;
  selectedItem$: Observable<MenuItem>;

  manageItem:boolean;

  constructor(
    private store:Store<MenuState>,
  ) { }

  ngOnInit() {
    this.menuItems$ = this.store.select(getMenuItems);
    this.displayStock$ = this.store.select(getMenuStock);
    this.selectedItem$ = this.store.select(getCurrentMenuItem);
  }

  checkChanged(): void {
    this.store.dispatch(MenuActions.toggleShowStocks());
  }

  addNewItem(){
    this.store.dispatch(MenuActions.initializeMenuItem());
  }

  itemSelected(item: MenuItem): void {
    this.store.dispatch(MenuActions.setCurrentItem({ currentMenuItemId: item.id }));
  }

  deleteItem(item: MenuItem): void {
    this.store.dispatch(MenuActions.deleteItem({ currentMenuItemId: item.id }));
  }

  clearItem(): void {
    this.store.dispatch(MenuActions.clearCurrentItem());
  }

  saveItem(item: MenuItem): void {
    this.store.dispatch(MenuActions.createItem({ item }));
  }

  updateItem(item: MenuItem): void {
    this.store.dispatch(MenuActions.updateMenuItem({ item }));
  }

}

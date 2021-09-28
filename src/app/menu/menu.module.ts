import { MenuRoutingModule } from './menu-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

@NgModule({
  declarations: [ManageMenuComponent, MenuListComponent, AddMenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
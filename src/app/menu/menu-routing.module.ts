import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';

export const routes:Routes =[{
  path:'',
  children:[
    {
      path:'',
      component:ManageMenuComponent,
    },
    {
      path:'item',
      component:AddMenuComponent,
    },
    {
      path:'list',
      component:MenuListComponent,
    },
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class MenuRoutingModule { }

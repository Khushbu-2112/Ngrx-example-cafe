import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/auth",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "auth",
    component: LoginComponent
  },
  {
    path: "menu",
    loadChildren: () =>import('./menu/menu.module').then(m => m.MenuModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

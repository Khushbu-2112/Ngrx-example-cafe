import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.state';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
    private store:Store<any>
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let loggedIn;
    await this.store.select('user').subscribe( (res:appState) => {
      if(res.username){
        loggedIn = true;
        // this.router.navigate(['menu']);
      }else{
        loggedIn = false;
        // this.router.navigate(['auth']);
      }
    });
    return loggedIn;
  }
}

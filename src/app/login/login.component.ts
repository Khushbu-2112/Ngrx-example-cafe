import { appState } from './../shared/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userActions from '../shared/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(
    private store:Store<appState>
  ) { }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(userActions.doLogin({username: this.username, password: this.password }));
  }

}

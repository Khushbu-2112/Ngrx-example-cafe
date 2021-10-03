import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState, getUser } from './shared/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cafe-ngrx';

  user$;
  username:string;

  constructor(
    private store:Store<any>
  ){}

  ngOnInit(){
    this.user$ = this.store.select(getUser).subscribe( (res) => {
      this.username  = res;
    })
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { User } from '../_models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public currentUser: any;

  constructor(private router: Router, private _tokenService: Angular2TokenService) { }

  signOut() {
    this._tokenService.signOut();
  }

  openUserSettings() {
    this.currentUser = this._tokenService.currentUserData;
    console.log(this.currentUser);
  }

}

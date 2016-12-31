import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  loggedIn: boolean;
  currentUser: User;

  constructor(private router: Router, private _userService: UserService) {
    this.loggedIn = this._userService.loggedIn();
  }

  signOut() {
    this._userService.signOut();
  }

  openUserSettings() {
    this.currentUser = this._userService.getUser();
    console.log(this.currentUser);

    this.loggedIn = this._userService.loggedIn();
    console.log(this.loggedIn);
  }

}

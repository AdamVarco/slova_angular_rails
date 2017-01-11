import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init({
          resetPasswordCallback: `${window.location.protocol}//${window.location.host}/#/password_update`
        });
    }
 }


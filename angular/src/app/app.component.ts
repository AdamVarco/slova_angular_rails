import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private _output: any;

  constructor(private _tokenService: Angular2TokenService, private router: Router) {
    this._tokenService.init();
  }

  signOut() {
    this._output = null;

        this._tokenService.signOut().subscribe(
            res => this._output     = res,
            error => this._output   = error
        );
  }
}

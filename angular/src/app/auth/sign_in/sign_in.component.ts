import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Angular2TokenService, SignInData } from 'angular2-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign_in.component.html',
  styleUrls: ['../auth.module.css']
})
export class SignInComponent {
  
  private _signInData: SignInData = <SignInData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService, private router: Router) { }

  signIn() {

        this._output = null;

        this._tokenService.signIn(this._signInData).subscribe(
            res => {
                this._signInData    = <SignInData>{};
                this._output        = res;
                this.router.navigate(['/dashboard']);
            }, error => {
                this._signInData    = <SignInData>{};
                this._output        = error;
            }
        );
    }

    resetPassword() {
        this.router.navigate(['reset_password']);
    }

}

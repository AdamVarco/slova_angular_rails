import { Component } from '@angular/core';
import { Router } from'@angular/router';

import { Angular2TokenService, ResetPasswordData } from 'angular2-token';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset_password.component.html',
  styleUrls: ['../auth.module.css']
})
export class ResetPasswordComponent {

  private _resetPasswordData: ResetPasswordData = <ResetPasswordData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService, private router: Router) { }

  resetPassword() {
    
    this._output = null;

    this._tokenService.resetPassword(this._resetPasswordData).subscribe(
              res => {
                this._resetPasswordData = <ResetPasswordData>{};
                this.router.navigate(['/sign_in']);
              }, error => {
                this._resetPasswordData = <ResetPasswordData>{};
                this._output        = error;
              }
          );
  }
}

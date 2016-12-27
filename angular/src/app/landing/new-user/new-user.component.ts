import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService, A2tUiModule, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  private _registerData: RegisterData = <RegisterData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService) {
      this._tokenService.init({
          apiPath:                    null,

          signInPath:                 'auth/sign_in',
          signInRedirect:             'dashboard',
          signInStoredUrlStorageKey:  null,

          signOutPath:                'auth/sign_out',
          validateTokenPath:          'auth/validate_token',
          signOutFailedValidate:      false,

          registerAccountPath:        'auth',
          deleteAccountPath:          'auth',
          registerAccountCallback:    window.location.href,

          updatePasswordPath:         'auth',
          resetPasswordPath:          'auth/password',
          resetPasswordCallback:      window.location.href,

          userTypes:                  null,

          globalOptions: {
              headers: {
                  'Content-Type':     'application/json',
                  'Accept':           'application/json'
              }
          }
        });
   }

  onSubmit() {

        this._output = null;

        this._tokenService.registerAccount(this._registerData).subscribe(
            res => {
                this._registerData  = <RegisterData>{};
                this._output        = res;
            }, error => {
                this._registerData  = <RegisterData>{};
                this._output        = error;
            }
        );
    }
}

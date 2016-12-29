import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService, A2tUiModule, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-new-user',
  templateUrl: './new_user.component.html',
  styleUrls: ['./new_user.component.css']
})
export class NewUserComponent {

  private _registerData: RegisterData = <RegisterData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService) { }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  public langs = [
      { value: 'be', display: 'Byelorussian' },
      { value: 'cs', display: 'Czech' },
      { value: 'da', display: 'Danish' },
      { value: 'en', display: 'English' },
      { value: 'fr', display: 'French' },
      { value: 'de', display: 'German' },
      { value: 'it', display: 'Italian' },
      { value: 'no', display: 'Norwegian' },
      { value: 'pt', display: 'Portugues' },
      { value: 'ru', display: 'Russian' },
      { value: 'sk', display: 'Slovak' },
      { value: 'es', display: 'Spanish' },
      { value: 'sv', display: 'Swedish' },
      { value: 'uk', display: 'Ukrainian' }
  ]

  constructor(private _tokenService: Angular2TokenService, private router: Router) {}

  onSubmit() {
        console.log(this._registerData);
        this._output = null;
        this.

        this._tokenService.registerAccount(this._registerData).subscribe(
            res => {
                this._registerData  = <RegisterData>{};
                this._output        = res;
                this.router.navigate(['/new_translation']);
            }, error => {
                this._registerData  = <RegisterData>{};
                this._output        = error;
            }
        );
    }
}

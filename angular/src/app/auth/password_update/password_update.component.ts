import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService, UpdatePasswordData } from 'angular2-token';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password_update.component.html',
  styleUrls: ['../auth.module.css']
})
export class PasswordUpdateComponent {

  private _updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService, private _userService: UserService, private _router: Router) { }

  updatePassword() {
    this._output = null;

    this._userService.updatePassword(this._updatePasswordData).subscribe(
        res => {
                this._updatePasswordData    = <UpdatePasswordData>{};
                this._output        = res;
                this._router.navigate(['/sign_in']);
            }, error => {
                this._updatePasswordData    = <UpdatePasswordData>{};
                this._output        = error;
            }
    );
  }
}

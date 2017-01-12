import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Angular2TokenService } from 'angular2-token';
import { User } from '../_models/user.model';
@Injectable()
export class UserService {
    constructor(private _tokenService: Angular2TokenService, private router: Router) { }

    public currentUser: User;
    private _output: any;
    private setUserUrl = '/api/v1/users';
    private saveSettingsUrl = 'api/v1/users/update';

    public signOut() {
        this._output = null;
            this._tokenService.signOut().subscribe(
                res => this._output     = res,
                error => this._output   = error
            );
    }

    public setUser() {
        return this._tokenService.get(this.setUserUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    public saveUserSettings(settings) {
        let params = JSON.stringify({native_lang: settings["native_lang"], target_lang: settings["target_lang"]});

        return this._tokenService.put(this.saveSettingsUrl, params)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    private handleError (error: Response | any) {
   
      let errMsg: string;
      if (error instanceof Response) {
        const body = error || '';
        const err = JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      console.error(errMsg);
      }
      return Observable.throw(errMsg);
    }
}
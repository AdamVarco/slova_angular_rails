import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx';

import { Angular2TokenService } from 'angular2-token';

import { User } from '../_models/user.model';

@Injectable()
export class UserService {
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

    getUser() {
        return this._tokenService.currentUserData;
    }

    loggedIn() {
        return this._tokenService.userSignedIn();
    }
}
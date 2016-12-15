import {Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  moduleId: 'module.id',
  selector: 'app-landing',
  templateUrl: 'landing.component.html'
})
export class LandingComponent { 
  
   private _showImprint: boolean = false;

    constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init();
    }
}
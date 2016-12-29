import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  moduleId: 'module.id',
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css']
})
export class LandingComponent { 
    constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init();
    }
}
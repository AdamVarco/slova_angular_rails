import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { Translation } from '../_models/translation.model';
import { TranslationService } from '../_services/translation.service';
import { CustomPipe } from './name.pipe';

@Component({
    moduleId: 'module.id',
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private translations: Translation[];
  private errorMessage: string;
  private mode = "Observable";
  private _showImprint: boolean = false;

  constructor(private translationService: TranslationService, private _tokenService: Angular2TokenService) {
    this._tokenService.init();
   }

  ngOnInit(): void {
    this.getTranslations();
  }

  getTranslations() {
    this.translationService.getTranslations()
        .subscribe(
          translations => this.translations = translations,
          error => this.errorMessage = <any>error
        );
  }
}
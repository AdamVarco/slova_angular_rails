import { Component, OnInit } from '@angular/core';

import { Translation } from '../_models/translation.model';
import { TranslationService } from '../_services/translation.service';

@Component({
    moduleId: 'module.id',
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    translations: Translation[];
  errorMessage: string;
  mode = "Observable";

  constructor(private translationService: TranslationService) { }

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
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Translation } from '../_models/translation.model';
import { TranslationService } from '../_services/translation.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-translations',
  templateUrl: 'translations.component.html',
  styleUrls: ['translations.component.css'],
  providers: [TranslationService]
})

export class TranslationsComponent implements OnInit {

  translations: Translation[];
  filteredTranslations: Translation[];
  errorMessage: string;
  mode = "Observable";

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.getTranslations();
  }

  getTranslations() {
    this.translationService.getTranslations()
        .subscribe(
          translations => this.translations = this.filteredTranslations = translations,
          error => this.errorMessage = <any>error
        );
  }

  search(search:string) {
    this.filteredTranslations = this.translations.filter(translation => translation.native.includes(search) || translation.target.includes(search) );
  }

}

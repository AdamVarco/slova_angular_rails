import { Component, Input, ChangeDetectorRef } from '@angular/core';

import { Translation } from '../../_models/translation.model';
import { TranslationService } from '../../_services/translation.service';

@Component({
  selector: 'translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css'],
  providers: [ TranslationService ]
})
export class TranslationListComponent {
   
  constructor(private translationService: TranslationService, private ref: ChangeDetectorRef ) { }

  @Input()
  translations: Translation[];
  selectedTranslation: Translation;

  resetTranslations() {
    this.translations.forEach((t) => {
      t.display = t.target;
    })
  }

  onSelect(translation: Translation) {
    if (this.selectedTranslation) {
      this.selectedTranslation.display = this.selectedTranslation.target
    }

      this.selectedTranslation = translation;

      translation.display = translation.native;
  }

  deleteTranslation(translation: Translation) {
    this.translationService.deleteTranslation(translation)
        .subscribe(
          success => {
            console.log("Translation " + translation.id + " was deleted");
            this.translations.splice(this.translations.indexOf(translation), 1);
            this.ref.detectChanges;
          },
          error => {
            console.log("Error deleting translation");
          },
        );
  }

}

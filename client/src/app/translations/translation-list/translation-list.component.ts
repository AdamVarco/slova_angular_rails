import { Component, OnInit, Input } from '@angular/core';
import { Translation } from '../translation.model';

@Component({
  selector: 'translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css']
})
export class TranslationListComponent implements OnInit {

  @Input()
  translations: Translation[];
  selectedTranslation: Translation;

  constructor() { }

  ngOnInit() {
  }

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

}

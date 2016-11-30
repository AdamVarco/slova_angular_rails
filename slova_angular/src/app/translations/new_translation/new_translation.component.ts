import { Component, OnInit } from '@angular/core';

import { Translation } from '../translation.model';
import { NewTranslationService } from './new_translation.service';

@Component({
    moduleId: 'module.id',
    selector: 'app-new-translation',
    templateUrl: 'new_translation.component.html',
    styleUrls: ['new_translation.component.css']
})
export class NewTranslationComponent {

    translation = new Translation;

    constructor(private newTranslationService: NewTranslationService) {
        
    }

}
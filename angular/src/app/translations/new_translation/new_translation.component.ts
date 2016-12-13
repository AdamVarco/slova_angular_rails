import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Translation } from '../translation.model';
import { NewTranslationService } from './new_translation.service';      

@Component({
    moduleId: 'module.id',
    selector: 'app-new-translation',
    templateUrl: 'new_translation.component.html',
    styleUrls: ['new_translation.component.css'],
    providers: [ NewTranslationService ]
})
export class NewTranslationComponent {

    public yandexTranslation: {};
    public newTranslation: Translation;

    constructor(private newTranslationService: NewTranslationService) {
        
    }

    translationSearch(query: any) {

        this.newTranslationService.getTranslation(query)
            .subscribe(
                data => {
                    this.yandexTranslation = data;
                },
                error => { console.log("Error getting translation");
                    return Observable.throw(error);
                },
                // () => this.yandexTranslation
            );  
    }
    
    saveTranslation(): void {
        this.newTranslationService.saveTranslation(this.yandexTranslation)
            .subscribe(
                success => {
                    this.yandexTranslation = undefined;
                },
                error => { 
                    console.log("Error saving translation");
                },
            );
    }

    cancelTranslation(): void {
        this.yandexTranslation = undefined;
    }
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Search } from './search.model';
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

    constructor(private newTranslationService: NewTranslationService) {
        
    }

    translationSearch(query: any) {

        this.newTranslationService.getTranslation(query)
            .subscribe(
                data => {
                    this.yandexTranslation = data;
                    console.log(this.yandexTranslation);
                },
                error => { console.log("Error getting translation");
                    return Observable.throw(error);
                },
            );  
    }
    
}
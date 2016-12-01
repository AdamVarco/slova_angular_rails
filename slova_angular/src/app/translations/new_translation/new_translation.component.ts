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

    search = new Search;

    constructor(private newTranslationService: NewTranslationService) {
        
    }

    translationSearch(search: any): void {

        this.newTranslationService.getTranslation(search)
            .subscribe(data => { return true },
                error => { console.log("Error getting translation");
                return Observable.throw(error);
                }
        );
        console.log(search);
    }

}
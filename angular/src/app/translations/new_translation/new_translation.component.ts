import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Translation } from '../../_models/translation.model';
import { NewTranslationService } from '../../_services/new_translation.service';      

@Component({
    moduleId: 'module.id',
    selector: 'app-new-translation',
    templateUrl: 'new_translation.component.html',
    styleUrls: ['new_translation.component.css'],
    providers: [ NewTranslationService ]
})
export class NewTranslationComponent {
    constructor(private newTranslationService: NewTranslationService, private router: Router) { }
    
    public yandexTranslation: any;
    public newTranslation: Translation;

    public translationSearch(query: any) {

        this.newTranslationService.searchTranslation(query)
            .subscribe(
                data => {
                    this.yandexTranslation = data;
                    if (this.yandexTranslation._body == "null") {
                        this.redirectToSettings();
                    }
                },
                error => { console.log("Error getting translation");
                    return Observable.throw(error);
                },
            );  
    }
    
    public saveTranslation(): void {
        this.newTranslationService.saveTranslation(this.yandexTranslation)
            .subscribe(
                success => {
                    this.cancelTranslation();
                },
                error => { 
                    console.log("Error saving translation");
                    this.cancelTranslation();
                    return Observable.throw(error);
                },
            );
    }

    public cancelTranslation(): void {
        this.yandexTranslation = undefined;
    }

    private redirectToSettings(): void {
        this.router.navigate(['/settings']);
    }
}
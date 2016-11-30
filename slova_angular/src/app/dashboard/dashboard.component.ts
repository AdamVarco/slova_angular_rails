import { Component, OnInit } from '@angular/core';

import { Translation } from '../translations/translation.model';
import { TranslationService } from '../translations/translation.service';

@Component({
    moduleId: 'module.id',
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    translations: Translation[];

    constructor(private translationService: TranslationService) { }

    ngOnInit(): void {
        // this.translationService.getTranslations()
        //     .subscribe(
        //         translations => this.translations = translations
        //     );
    }
}
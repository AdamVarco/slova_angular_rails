import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationsComponent } from './translations/translations.component';
import { NewTranslationComponent } from './translations/new_translation/new_translation.component';
import { TestsComponent } from './tests/tests.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'translations', component: TranslationsComponent },
    { path: 'new_translation', component: NewTranslationComponent },
    { path: 'tests', component: TestsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationsComponent } from './translations/translations.component';
import { NewTranslationComponent } from './translations/new_translation/new_translation.component';
import { TestsComponent } from './tests/tests.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { 
        path: 'landing', 
        component: LandingComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent 
     },
    { 
        path: 'translations', 
        component: TranslationsComponent
     },
    { 
        path: 'new_translation', 
        component: NewTranslationComponent    
     },
    { 
        path: 'tests', 
        component: TestsComponent   
     },
    { 
        path: 'profile', 
        component: ProfileComponent
     },
    { 
        path: '', redirectTo: 'landing', 
        pathMatch: 'full' },
    { 
        path: '**', 
        redirectTo: 'landing'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
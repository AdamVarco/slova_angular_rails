import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationsComponent } from './translations/translations.component';
import { NewTranslationComponent } from './translations/new_translation/new_translation.component';
import { TestsComponent } from './tests/tests.component';
import { SettingsComponent } from './settings/settings.component';
import { NewUserComponent } from './auth/new_user/new_user.component';
import { SignInComponent } from './auth/sign_in/sign_in.component';

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
        path: 'settings', 
        component: SettingsComponent
     },
     { 
        path: 'new_user', 
        component: NewUserComponent
     },
     { 
        path: 'sign_in', 
        component: SignInComponent
     },
    { 
        path: '', redirectTo: 'landing', 
        pathMatch: 'full' },
    { 
        path: '**', 
        redirectTo: 'landing'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
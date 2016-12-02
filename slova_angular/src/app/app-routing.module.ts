import { NgModule } from '@angular/core';
import { ModuleWithProviders }         from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
        component: DashboardComponent,
        canActivate: [AuthGuard]    
     },
    { 
        path: 'translations', 
        component: TranslationsComponent,
        canActivate: [AuthGuard] 
     },
    { 
        path: 'new_translation', 
        component: NewTranslationComponent,
        canActivate: [AuthGuard]     
     },
    { 
        path: 'tests', 
        component: TestsComponent,
        canActivate: [AuthGuard]     
     },
    { 
        path: 'profile', 
        component: ProfileComponent,
        canActivate: [AuthGuard] 
     },
    { 
        path: '', redirectTo: 'landing', 
        pathMatch: 'full' },
    { 
        path: '**', 
        redirectTo: 'landing'}
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
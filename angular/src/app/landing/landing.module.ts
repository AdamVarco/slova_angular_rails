import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { NewUserComponent } from './new-user/new-user.component';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        LandingComponent,
        NewUserComponent,
    ],
    exports: [
        LandingComponent
    ]
})
export class LandingModule { }
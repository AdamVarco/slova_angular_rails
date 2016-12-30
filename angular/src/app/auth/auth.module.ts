import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { NewUserComponent } from './new_user/new_user.component';
import { SignInComponent } from './sign_in/sign_in.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        NewUserComponent,
        SignInComponent
    ],
    providers: [
        Angular2TokenService
    ]
})
export class AuthModule { }
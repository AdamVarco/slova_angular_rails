import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { NewUserComponent } from './new_user/new_user.component';
import { SignInComponent } from './sign_in/sign_in.component';
import { ResetPasswordComponent } from './reset_password/reset_password.component';
import { PasswordUpdateComponent } from './password_update/password_update.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        NewUserComponent,
        SignInComponent,
        ResetPasswordComponent,
        PasswordUpdateComponent
    ],
    providers: [
        Angular2TokenService,
        A2tUiModule
    ]
})
export class AuthModule { }
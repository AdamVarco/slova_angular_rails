// External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

// Adds functionality to Observable query objects
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// Internal Modules
import { AppRoutingModule } from './app_routing.module';
import { AuthModule } from './auth/auth.module';

// Smart components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewTranslationComponent } from './translations/new_translation/new_translation.component';
import { SettingsComponent } from './settings/settings.component';
import { QuestionsComponent } from './tests/questions/questions.component';
import { TestComponent } from './tests/test/test.component';
import { TestsComponent } from './tests/tests.component';
import { TranslationsComponent } from './translations/translations.component';

// Presentation components
import { TranslationListComponent } from './translations/translation-list/translation-list.component';

// Services and configuration
import { TranslationService } from './_services/translation.service';
import { NewTranslationService } from './_services/new_translation.service';
import { UserService } from './_services/user.service';


@NgModule({
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    A2tUiModule
  ],
  exports: [ MaterialModule ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    MenuComponent,
    NavigationComponent, 
    NewTranslationComponent,
    SettingsComponent,
    TranslationsComponent,
    TranslationListComponent,
    TestsComponent,
    TestComponent,
    QuestionsComponent,
  ],
  providers: [
    AUTH_PROVIDERS,
    Angular2TokenService,
    TranslationService,
    NewTranslationService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

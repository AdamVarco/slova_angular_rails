// External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Auth } from  './auth/auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth/auth.guard';

// adds functionality to Observable query objects
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AppRoutingModule } from './app-routing.module';

// Smart components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslationsComponent } from './translations/translations.component';
import { NewTranslationComponent } from './translations/new_translation/new_translation.component';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './tests/test/test.component';
import { QuestionsComponent } from './tests/questions/questions.component';
import { ProfileComponent } from './profile/profile.component';

// Presentation components
import { TranslationListComponent } from './translations/translation-list/translation-list.component';

// Services and configuration
import { TranslationService } from './translations/translation.service';
import { NewTranslationService } from './translations/new_translation/new_translation.service';
import { TestService } from './tests/test.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [ MaterialModule ],
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    DashboardComponent,
    TranslationsComponent,
    NewTranslationComponent,
    TranslationListComponent,
    TestsComponent,
    TestComponent,
    QuestionsComponent,
    ProfileComponent
  ],
  providers: [
    TranslationService,
    NewTranslationService,
    TestService,
    Auth,
    AUTH_PROVIDERS,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

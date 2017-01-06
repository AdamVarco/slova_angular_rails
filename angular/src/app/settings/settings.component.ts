import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public langs = [
      { value: 'be', display: 'Byelorussian' },
      { value: 'cs', display: 'Czech' },
      { value: 'da', display: 'Danish' },
      { value: 'en', display: 'English' },
      { value: 'fr', display: 'French' },
      { value: 'de', display: 'German' },
      { value: 'it', display: 'Italian' },
      { value: 'no', display: 'Norwegian' },
      { value: 'pt', display: 'Portugues' },
      { value: 'ru', display: 'Russian' },
      { value: 'sk', display: 'Slovak' },
      { value: 'es', display: 'Spanish' },
      { value: 'sv', display: 'Swedish' },
      { value: 'uk', display: 'Ukrainian' }
  ]

  constructor(private _tokenService: Angular2TokenService) { }

  saveLanguage() {
      console.log("This is when and where I'd save the user's language");
    }

}

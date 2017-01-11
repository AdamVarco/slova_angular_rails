import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';

import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private _tokenService: Angular2TokenService, private _userService: UserService) { }

  public currentUser: any;
  public errorMessage: string;

  public userdata: any;

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

  ngOnInit(): void {
    this.currentUser = this._userService.setUser()
  }

  saveUserSettings(settings) {
      this._userService.saveUserSettings(settings)
              .subscribe(
                  data => {
                      this.userdata = data;
                  },
                  error => {
                      console.log("Error saving user settings");
                      return Observable.throw(error);
                  }
              );
    }

}

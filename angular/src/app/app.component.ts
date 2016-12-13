import { Component } from '@angular/core';

import { Auth } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Auth]
})

export class AppComponent {
  
  title = "Slova";

  constructor(private auth: Auth) {
    
  }

  openUserSettings() {
    return this;
  }
 }

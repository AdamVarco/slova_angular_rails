import { Component } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
    moduleId: 'module.id',
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    profile:any;

    constructor(private auth:Auth){
        this.profile = localStorage.getItem('profile');
        console.log(this.profile);
    }
}
import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
    moduleId: 'module.id',
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    profile:any;

    constructor(private auth:Auth) {}

    ngOnInit(): void {
        this.profile = JSON.parse(localStorage.getItem('profile'));
            console.log(this.profile);
    }
}
import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: 'module.id',
  selector: 'app-nav',
  templateUrl: 'navigation.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class NavigationComponent {
  tabLinks = [
    {label: 'Dashboard', link: 'dashboard'},
    {label: 'Translations', link: 'translations'},
    {label: 'Tests', link: 'tests'},
    {label: 'Add Word', link: 'new_translation'},
    {label: 'Profile', link: 'profile'}
  ];
  activeLinkIndex = 0;

  tabs = [
    {
      label: 'Dashboard',
      disabled: true},
    {
      label: 'Translations',
      disabled: true},
    {
      label: 'Translations',
      disabled: true},
    {
      label: 'Add Word',
      disabled: true},
    {
      label: 'Profile',
      diabled: true}
  ];

  asyncTabs: Observable<any>;

  constructor(private router: Router) {
    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.tabs);
      }, 1000);
    });

    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
        this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }
}
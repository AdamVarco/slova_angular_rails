/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
 
import { TranslationService } from './translations/translation.service';
import { Auth } from './auth/auth.service';


export class MockTranslationService {
  constructor() { }
 
  getList(): Observable<any[]> {
    return Observable.of([]);
  }
}
 
export class MockAuth {
  login() {}
  logout() {}
  authenticated() {}
}
 
let mockTranslationService = new MockTranslationService();
let mockAuth = new MockAuth();

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
    .overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: TranslationService, useValue: mockTranslationService },
          { provide: Auth, useValue: mockAuth }
        ]
      }
    })
    .compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Slova'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Slova');
  }));
});

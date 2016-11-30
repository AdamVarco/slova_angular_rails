import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Test } from './test.model';

@Injectable()
export class TestService {

    constructor() { }

    generateTest(): Observable<Test> {

        return //Call rails Api for test here

    }
  
}
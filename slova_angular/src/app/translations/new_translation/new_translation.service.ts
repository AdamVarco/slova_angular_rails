import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class NewTranslationService {

   translation = {
      id: 11,
      native: "fox",
      target: "лиса",
      display: "лиса",
      created_at: "2016-11-24T00:44:27.439Z",
      updated_at: "2016-11-24T00:44:27.439Z" 
    }

    constructor() { 
    }
}
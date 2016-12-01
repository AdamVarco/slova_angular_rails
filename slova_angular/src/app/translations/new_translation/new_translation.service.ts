import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Search } from './search.model';

@Injectable()
export class NewTranslationService {

    private newTranslationsUrl = 'http://localhost:3001/translations.json';

    constructor(
        private http: Http
    ) {}

    getTranslation(search) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.newTranslationsUrl, JSON.stringify(search), {
        headers: headers}).map((res: Response) => res.json());
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Search } from './search.model';

@Injectable()
export class NewTranslationService {
    
    constructor( private http: Http ) {
        
    }

    private newTranslationsUrl = 'http://localhost:3000/translations';
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    getTranslation(search) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.newTranslationsUrl, JSON.stringify(search), {
        headers: headers}).map(this.extractData);
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Translation } from './translation.model';

@Injectable()
export class TranslationService {

    private translationsUrl = 'http://localhost:3001/translations/json';

    constructor(
        private http: Http
    ) {}

    getTranslations(): Observable<Translation[]> {
        return this.http.get(this.translationsUrl)
                        .map((response: Response) => <Translation[]>response.json())
                        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
    // Consider using a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
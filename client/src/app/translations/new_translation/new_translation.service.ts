import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Search } from './search.model';

@Injectable()
export class NewTranslationService {

    constructor( private http: Http ) { }

    private newTranslationsUrl = 'http://localhost:3000/translations';

    public getTranslation(search) {
        let userSearch = JSON.stringify(search)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let yandexTranslation = this.http.post(this.newTranslationsUrl, userSearch, {
            headers: headers}).map((response: Response) => response)
            .catch(this.handleError);
            return yandexTranslation;
    }


     private handleError (error: Response | any) {
   
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
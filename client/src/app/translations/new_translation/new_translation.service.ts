import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NewTranslationService {

    public userSearch: string;

    constructor( private http: Http ) { }

    private searchTranslationUrl = 'http://localhost:3000/translations/search';
    private createTranslationUrl = 'http://localhost:3000/translations';

    public getTranslation(search) {
        this.userSearch = search;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let yandexTranslation = this.http.post(this.searchTranslationUrl, JSON.stringify(this.userSearch), {
            headers: headers}).map((response: Response) => response)
            .catch(this.handleError);
            return yandexTranslation;
    }

    public saveTranslation(yandexTranslation) {
        this.showThings(yandexTranslation);
        
        let params = JSON.stringify({native: this.userSearch["search"], target: yandexTranslation["_body"]});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.createTranslationUrl, params, {
            headers: headers}).map((response: Response) => response)
            .catch(this.handleError);
    }

    showThings(word) {
        console.log(word);
        console.log(this.userSearch);
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
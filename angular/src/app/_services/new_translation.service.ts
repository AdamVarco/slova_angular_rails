import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class NewTranslationService {

    public userSearch: string;

    constructor( private http: Http, private _tokenService: Angular2TokenService ) { }

    private searchTranslationUrl = '/api/v1/translations/search';
    private createTranslationUrl = '/api/v1/translations';

    public getTranslation(search) {
        this.userSearch = search;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let yandexTranslation = this.http.post(this.searchTranslationUrl, JSON.stringify(this.userSearch), {
            headers: headers}).map((response: Response) => response)
            .catch(this.handleError);
            console.log(yandexTranslation);
            return yandexTranslation;
    }

    public saveTranslation(yandexTranslation) {
        let params = JSON.stringify({native: this.userSearch["search"], target: yandexTranslation["_body"], user_id: this._tokenService.currentUserData.id});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.createTranslationUrl, params, {
            headers: headers}).map((response: Response) => response)
            .catch(this.handleError);
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
import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class NewTranslationService {

    constructor( private _tokenService: Angular2TokenService ) { }

    private userSearch: string;
    private searchTranslationUrl = '/api/v1/translations/search';
    private createTranslationUrl = '/api/v1/translations';

    public searchTranslation(search) {
        let params = JSON.stringify(search)
        this.userSearch = search;

        return this._tokenService.post(this.searchTranslationUrl, params)
                                .map(res => res)
                                .catch(this.handleError);
    }

    public saveTranslation(yandexTranslation) {
        let params = JSON.stringify({native: this.userSearch["search"], target: yandexTranslation["_body"], user_id: this._tokenService.currentUserData.id});
        
        return this._tokenService.post(this.createTranslationUrl, params)
                                .map(res => res)
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
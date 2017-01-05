import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Angular2TokenService } from 'angular2-token';

import { Translation } from '../_models/translation.model';

@Injectable()
export class TranslationService {

    private translationsUrl = '/api/v1/translations';
    // private headers

    constructor( private http: Http, private _tokenService: Angular2TokenService ) {}

    getTranslations() {

      return this._tokenService.get(this.translationsUrl)
                          .map(res => res.json())
      ;
      

        // return this.http.get(this.translationsUrl)
        //                 .map((response: Response) => <Translation[]>response.json())
        //                 .catch(this.handleError);
    }

    deleteTranslation(translation: Translation) {
      return this.http.delete(this.translationsUrl + "/" + translation.id)
                  .catch(this.handleError);
    }

    private handleError (error: Response | any) {
   
    let errMsg: string;
    if (error instanceof Response) {
      const body = error || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Angular2TokenService } from 'angular2-token';

import { Translation } from '../_models/translation.model';

@Injectable()
export class TranslationService {
    constructor( private _tokenService: Angular2TokenService ) {}

    private translationsUrl = '/api/v1/translations';  

    public getTranslations() {
      return this._tokenService.get(this.translationsUrl)
                          .map(res => res.json())
                          .catch(this.handleError);
    }

    public deleteTranslation(translation: Translation) {
      return this._tokenService.delete(this.translationsUrl + "/" + translation.id)
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
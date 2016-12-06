var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Translation } from './translation.model';
var TranslationsComponent = (function () {
    function TranslationsComponent() {
    }
    TranslationsComponent.prototype.ngOnInit = function () {
        this.translations = [
            new Translation({ 'id': 1, 'native': 'apple', 'target': 'яблока', 'display': 'apple' }),
            new Translation({ 'id': 2, 'native': 'bear', 'target': 'медвед', 'display': 'bear' }),
            new Translation({ 'id': 3, 'native': 'cat', 'target': 'кошка', 'display': 'cat' }),
            new Translation({ 'id': 4, 'native': 'dog', 'target': 'собака', 'display': 'dog' }),
            new Translation({ 'id': 5, 'native': 'elephant', 'target': 'слон', 'display': 'elephant' })
        ];
    };
    TranslationsComponent.prototype.onSelect = function (translation) {
        this.selectedTranslation = translation;
        translation.translate();
    };
    return TranslationsComponent;
}());
TranslationsComponent = __decorate([
    Component({
        moduleId: 'module.id',
        selector: 'translations',
        templateUrl: 'translations.component.html',
        styleUrls: ['translations.component.css']
    }),
    __metadata("design:paramtypes", [])
], TranslationsComponent);
export { TranslationsComponent };
//# sourceMappingURL=../../../../src/app/translations/translations.component.js.map
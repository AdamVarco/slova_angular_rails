var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var TranslationListComponent = (function () {
    function TranslationListComponent() {
    }
    TranslationListComponent.prototype.ngOnInit = function () {
    };
    TranslationListComponent.prototype.resetTranslations = function () {
        this.translations.forEach(function (t) {
            t.display = t.target;
        });
    };
    TranslationListComponent.prototype.onSelect = function (translation) {
        if (this.selectedTranslation) {
            this.selectedTranslation.display = this.selectedTranslation.target;
        }
        this.selectedTranslation = translation;
        translation.display = translation.native;
    };
    return TranslationListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], TranslationListComponent.prototype, "translations", void 0);
TranslationListComponent = __decorate([
    Component({
        selector: 'translation-list',
        templateUrl: './translation-list.component.html',
        styleUrls: ['./translation-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], TranslationListComponent);
export { TranslationListComponent };
//# sourceMappingURL=../../../../../src/app/translations/translation-list/translation-list.component.js.map
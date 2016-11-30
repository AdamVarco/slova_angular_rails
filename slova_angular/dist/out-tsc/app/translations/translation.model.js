export var Translation = (function () {
    function Translation(info) {
        this.id = info.id;
        this.native = info.native;
        this.target = info.target;
        this.display = info.native;
    }
    Translation.prototype.translate = function () {
        if (this.display === this.native) {
            this.display = this.target;
        }
        else {
            this.display = this.native;
        }
    };
    return Translation;
}());
//# sourceMappingURL=../../../../src/app/translations/translation.model.js.map
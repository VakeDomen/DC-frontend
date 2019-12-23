import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let NoteComponent = class NoteComponent {
    constructor() {
        this.displayBodyLength = 300;
        this.color = "#00d1b2";
    }
    ngOnInit() {
    }
    shorten(body) {
        return body.slice(0, this.displayBodyLength) + (body.length > this.displayBodyLength ? '...' : '');
    }
};
tslib_1.__decorate([
    Input()
], NoteComponent.prototype, "note", void 0);
tslib_1.__decorate([
    Input()
], NoteComponent.prototype, "displayBodyLength", void 0);
tslib_1.__decorate([
    Input()
], NoteComponent.prototype, "color", void 0);
NoteComponent = tslib_1.__decorate([
    Component({
        selector: 'app-note',
        templateUrl: './note.component.html',
        styleUrls: ['./note.component.scss']
    })
], NoteComponent);
export { NoteComponent };
//# sourceMappingURL=note.component.js.map
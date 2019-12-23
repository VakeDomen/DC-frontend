import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PatriciaTree } from 'src/app/models/particiaTree';
let FilterableNotesComponent = class FilterableNotesComponent {
    constructor() {
        this.pinned = true;
        this.ableToAddNew = false;
        this.groupColors = false;
        this.group = null;
    }
    ngOnChanges(changes) {
        this.noteFilterTree = new PatriciaTree();
        if (this.notes && this.notes.length !== 0) {
            for (const note of this.notes) {
                this.noteFilterTree.insertWord(note.title, note);
            }
        }
    }
    filter(notes) {
        let filteredNotes = [];
        if (this.textFilter) {
            console.log("filter", this.textFilter);
            filteredNotes = this.noteFilterTree.collect(this.textFilter);
        }
        console.log(filteredNotes);
        return filteredNotes;
        if (!filteredNotes && this.textFilter.length === 0) {
            return notes;
        }
        else {
            return filteredNotes;
        }
    }
};
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "notes", void 0);
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "pinned", void 0);
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "ableToAddNew", void 0);
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "groupColors", void 0);
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "groups", void 0);
tslib_1.__decorate([
    Input()
], FilterableNotesComponent.prototype, "group", void 0);
FilterableNotesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-filterable-notes',
        templateUrl: './filterable-notes.component.html',
        styleUrls: ['./filterable-notes.component.scss']
    })
], FilterableNotesComponent);
export { FilterableNotesComponent };
//# sourceMappingURL=filterable-notes.component.js.map
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let NotesComponent = class NotesComponent {
    constructor(noteService, auth) {
        this.noteService = noteService;
        this.auth = auth;
        this.pinned = true;
        this.ableToAddNew = false;
        this.groupColors = false;
        this.group = null;
        this.modalOpen = false;
    }
    ngOnChanges(changes) {
        if (this.notes) {
            if (this.pinned) {
                this.sortWithPinnedNotes();
            }
            else {
                this.notes = this.noteService.sortByDate(this.notes);
            }
        }
    }
    getNoteColor(note) {
        if (this.groups) {
            for (const group of this.groups) {
                if (note.group_id === group.id) {
                    return group.color;
                }
            }
        }
        if (this.group) {
            return this.group.color;
        }
        return "#00d1b2";
    }
    sortWithPinnedNotes() {
        let { pinnedNotes, otherNotes } = this.splitByPinned(this.notes);
        pinnedNotes = this.noteService.sortByDate(pinnedNotes),
            otherNotes = this.noteService.sortByDate(otherNotes);
        this.notes = pinnedNotes.concat(otherNotes);
    }
    splitByPinned(notes) {
        const pinnedNotes = [];
        const otherNotes = [];
        for (const note of notes) {
            if (note.pinned === 1) {
                pinnedNotes.push(note);
            }
            else {
                otherNotes.push(note);
            }
        }
        return {
            pinnedNotes,
            otherNotes
        };
    }
    newNote(note) {
        console.log("new note: ", note);
        this.notes.push(note);
        this.modalOpen = false;
    }
};
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "notes", void 0);
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "pinned", void 0);
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "ableToAddNew", void 0);
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "groupColors", void 0);
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "groups", void 0);
tslib_1.__decorate([
    Input()
], NotesComponent.prototype, "group", void 0);
NotesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-notes',
        templateUrl: './notes.component.html',
        styleUrls: ['./notes.component.scss']
    })
], NotesComponent);
export { NotesComponent };
//# sourceMappingURL=notes.component.js.map
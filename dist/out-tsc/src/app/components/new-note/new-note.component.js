import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
let NewNoteComponent = class NewNoteComponent {
    constructor(noteService) {
        this.noteService = noteService;
        this.public = false;
        this.pinned = false;
        this.group = null;
        this.createdNote = new EventEmitter();
    }
    ngOnInit() {
        this.note = new Note();
    }
    submit() {
        if (this.group) {
            this.note.group_id = this.group.id;
        }
        this.note.preprareForUpload(this.public, this.pinned);
        this.noteService.saveNew(this.note).subscribe((note) => {
            console.log('note', note);
            this.createdNote.emit(note);
        }, err => {
            console.log('error', err);
        });
        console.log(this.note);
    }
    updateDate(date) {
        this.note.date_tag = this.parseNaiveDateTime(date);
    }
    parseNaiveDateTime(date) {
        return date.getFullYear() +
            '-' + ('0' + (date.getMonth() + 1)).slice(-2) +
            '-' + ('0' + date.getDate()).slice(-2) +
            ' ' + ('0' + date.getHours()).slice(-2) +
            ':' + ('0' + date.getMinutes()).slice(-2) +
            ':' + ('0' + date.getSeconds()).slice(-2);
    }
};
tslib_1.__decorate([
    Input()
], NewNoteComponent.prototype, "group", void 0);
tslib_1.__decorate([
    Output()
], NewNoteComponent.prototype, "createdNote", void 0);
NewNoteComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-note',
        templateUrl: './new-note.component.html',
        styleUrls: ['./new-note.component.scss']
    })
], NewNoteComponent);
export { NewNoteComponent };
//# sourceMappingURL=new-note.component.js.map
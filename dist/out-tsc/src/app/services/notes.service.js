import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let NotesService = class NotesService {
    constructor(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl + 'notes/';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
            }),
            withCredentials: true
        };
    }
    getUserGroupNotes() {
        return this.http.get(this.apiUrl + "groups", this.httpOptions);
    }
    getPublicNotes() {
        // not implemented yet
        return this.http.get(this.apiUrl + "public", this.httpOptions);
    }
    getUserNotes() {
        return this.http.get(this.apiUrl, this.httpOptions);
    }
    saveNew(note) {
        return this.http.post(this.apiUrl, note, this.httpOptions);
    }
    //notes helper functions
    sortByDate(notes) {
        return notes.sort((a, b) => {
            return this.getTime(new Date(b.date_tag)) - this.getTime(new Date(a.date_tag));
        });
    }
    getTime(date) {
        return date != null ? date.getTime() : 0;
    }
};
NotesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], NotesService);
export { NotesService };
//# sourceMappingURL=notes.service.js.map
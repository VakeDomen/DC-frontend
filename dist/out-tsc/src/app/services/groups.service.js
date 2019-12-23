import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let GroupsService = class GroupsService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.apiUrl = environment.apiUrl + 'groups/';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
            }),
            withCredentials: true
        };
    }
    //size = 1
    getGroupWithNotes(id) {
        return this.http.get(this.apiUrl + id, this.httpOptions);
    }
    getUserGroups() {
        return this.http.get(this.apiUrl, this.httpOptions);
    }
    createGroup(group) {
        return this.http.post(this.apiUrl, group, this.httpOptions);
    }
    joinGroup(id) {
        const target = { id: id };
        return this.http.post(this.apiUrl + "join", target, this.httpOptions);
    }
    leaveGroup(id) {
        const target = { id: id };
        return this.http.post(this.apiUrl + "leave", target, this.httpOptions);
    }
    deleteGroup(id) {
        return this.http.delete(this.apiUrl + id, this.httpOptions);
    }
};
GroupsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GroupsService);
export { GroupsService };
//# sourceMappingURL=groups.service.js.map
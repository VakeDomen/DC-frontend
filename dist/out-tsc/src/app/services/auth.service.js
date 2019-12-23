import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.apiUrl = environment.apiUrl + 'auth/';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
            }),
            withCredentials: true
        };
    }
    loggedUser() {
        return JSON.parse(sessionStorage.getItem('loggedUser'));
    }
    setUser(user) {
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
    }
    isLoggedIn() {
        return !!sessionStorage.getItem('loggedUser');
    }
    removeUser() {
        sessionStorage.removeItem('loggedUser');
    }
    login(credentials) {
        return this.http.post(this.apiUrl, credentials, this.httpOptions);
    }
    logout() {
        this.removeUser();
        // this.toast.success('Logged out.', 'Success');
        return this.http.delete(this.apiUrl, this.httpOptions);
    }
    register(user) {
        return this.http.post(this.apiUrl + 'register/', user, this.httpOptions);
    }
    confirmRegistration(id, authData) {
        return this.http.post(this.apiUrl + 'register/' + id, authData);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
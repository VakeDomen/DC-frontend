import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data';
let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.authData = new AuthData();
    }
    login() {
        if (this.authData.email !== '' && this.authData.password !== '') {
            this.auth.login(this.authData).subscribe((user) => {
                this.auth.setUser(user);
                this.router.navigate(["/"]);
            }, err => {
                console.log(err);
            });
        }
        else {
            console.log("invaild auth data");
        }
    }
    register() {
        this.router.navigate(["/register"]);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
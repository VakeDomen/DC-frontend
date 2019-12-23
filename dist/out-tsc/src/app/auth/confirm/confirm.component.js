import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data';
let ConfirmComponent = class ConfirmComponent {
    constructor(route, auth, router) {
        this.route = route;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.authData = new AuthData();
        this.id = this.route.snapshot.paramMap.get("id");
    }
    login() {
        if (this.authData.email !== '' && this.authData.password !== '') {
            this.auth.confirmRegistration(this.id, this.authData).subscribe((user) => {
                this.auth.setUser(user);
                this.router.navigate(["/"]);
            }, err => {
                console.log(err);
            });
        }
        else {
            console.log("invalid data");
        }
    }
};
ConfirmComponent = tslib_1.__decorate([
    Component({
        selector: 'app-confirm',
        templateUrl: './confirm.component.html',
        styleUrls: ['./confirm.component.scss']
    })
], ConfirmComponent);
export { ConfirmComponent };
//# sourceMappingURL=confirm.component.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
let RegistrationComponent = class RegistrationComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.newUser = new NewUser();
    }
    register() {
        if (this.newUser.checkData(this.password)) {
            this.auth.register(this.newUser).subscribe((inv) => {
                console.log(inv);
                this.router.navigate(["/login"]);
            }, err => {
                console.log(err);
            });
        }
        else {
            console.log("invalid registration data");
        }
    }
};
RegistrationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.scss']
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map
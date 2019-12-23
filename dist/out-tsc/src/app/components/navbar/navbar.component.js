import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.activeTab = 'home';
        this.tab = new EventEmitter();
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
        this.router.navigate(["/home"]);
    }
};
tslib_1.__decorate([
    Output()
], NavbarComponent.prototype, "tab", void 0);
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map
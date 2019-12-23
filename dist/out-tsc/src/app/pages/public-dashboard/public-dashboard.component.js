import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PublicDashboardComponent = class PublicDashboardComponent {
    constructor(noteService) {
        this.noteService = noteService;
    }
    ngOnInit() {
        this.noteService.getPublicNotes().subscribe((notes) => {
            this.notes = notes;
        }, error => {
            console.log(error);
        });
    }
};
PublicDashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-public-dashboard',
        templateUrl: './public-dashboard.component.html',
        styleUrls: ['./public-dashboard.component.scss']
    })
], PublicDashboardComponent);
export { PublicDashboardComponent };
//# sourceMappingURL=public-dashboard.component.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PrivateDashboardComponent = class PrivateDashboardComponent {
    constructor(noteService, groupsService) {
        this.noteService = noteService;
        this.groupsService = groupsService;
    }
    ngOnInit() {
        this.groupsService.getUserGroups().subscribe((groups) => {
            this.groups = groups;
        });
        this.noteService.getUserNotes().subscribe((notes) => {
            this.notes = notes;
        }, error => {
            console.log(error);
        });
    }
};
PrivateDashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-private-dashboard',
        templateUrl: './private-dashboard.component.html',
        styleUrls: ['./private-dashboard.component.scss']
    })
], PrivateDashboardComponent);
export { PrivateDashboardComponent };
//# sourceMappingURL=private-dashboard.component.js.map
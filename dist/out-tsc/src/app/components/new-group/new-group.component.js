import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/models/group';
let NewGroupComponent = class NewGroupComponent {
    constructor(groupService, authService) {
        this.groupService = groupService;
        this.authService = authService;
        this.color = "#50D0D0";
        this.createdGroup = new EventEmitter();
    }
    ngOnInit() {
        this.group = new Group();
    }
    submit() {
        this.group.preprareForUpload(this.authService.loggedUser(), this.color);
        this.groupService.createGroup(this.group).subscribe((createdGroup) => {
            console.log("created: ", createdGroup);
            this.createdGroup.emit(createdGroup);
        }, err => {
            console.log("error", err);
        });
    }
    colorChange(color) {
        this.color = color;
    }
};
tslib_1.__decorate([
    Output()
], NewGroupComponent.prototype, "createdGroup", void 0);
NewGroupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-group',
        templateUrl: './new-group.component.html',
        styleUrls: ['./new-group.component.scss']
    })
], NewGroupComponent);
export { NewGroupComponent };
//# sourceMappingURL=new-group.component.js.map
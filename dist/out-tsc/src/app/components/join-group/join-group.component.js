import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let JoinGroupComponent = class JoinGroupComponent {
    constructor(groupService) {
        this.groupService = groupService;
        this.id = null;
        this.joinedGroup = new EventEmitter();
    }
    ngOnInit() {
    }
    join() {
        if (this.id) {
            this.groupService.joinGroup(this.id).subscribe((group) => {
                this.joinedGroup.emit(group);
            });
        }
    }
};
tslib_1.__decorate([
    Output()
], JoinGroupComponent.prototype, "joinedGroup", void 0);
JoinGroupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-join-group',
        templateUrl: './join-group.component.html',
        styleUrls: ['./join-group.component.scss']
    })
], JoinGroupComponent);
export { JoinGroupComponent };
//# sourceMappingURL=join-group.component.js.map
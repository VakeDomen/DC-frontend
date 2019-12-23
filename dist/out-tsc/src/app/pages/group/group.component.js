import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GroupComponent = class GroupComponent {
    constructor(groupService, route, router, authService) {
        this.groupService = groupService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.leaveModal = false;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.groupService.getGroupWithNotes(id).subscribe((groupedNotes) => {
            this.group = groupedNotes.group;
            this.notes = groupedNotes.notes;
        });
    }
    numOfAllNotes() {
        return this.notes.length;
    }
    numOfPinnedNotes() {
        let counter = 0;
        for (const note of this.notes) {
            if (note.pinned === 1) {
                counter++;
            }
        }
        return counter;
    }
    isMember() {
        return true;
    }
    numOfMembers() {
        return 1;
    }
    copyToClipboard(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    leaveGroup() {
        this.groupService.leaveGroup(this.group.id).subscribe((group) => {
            //toast
            this.router.navigate(["/groups"]);
        });
    }
    deleteGroup() {
        this.groupService.deleteGroup(this.group.id).subscribe((group) => {
            console.log("group deleted: ", group);
            this.router.navigate(["/groups"]);
        });
    }
    isGroupOwner() {
        return this.authService.loggedUser().id === this.group.created_by;
    }
};
GroupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-group',
        templateUrl: './group.component.html',
        styleUrls: ['./group.component.scss']
    })
], GroupComponent);
export { GroupComponent };
//# sourceMappingURL=group.component.js.map
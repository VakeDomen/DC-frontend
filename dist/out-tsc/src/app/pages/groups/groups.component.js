import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GroupsComponent = class GroupsComponent {
    constructor(groupService, notesService) {
        this.groupService = groupService;
        this.notesService = notesService;
        this.modalOpen = false;
    }
    ngOnInit() {
        this.groupService.getUserGroups().subscribe((groups) => {
            this.groups = groups;
        });
        this.notesService.getUserGroupNotes().subscribe((groupedNotes) => {
            this.groupedNotes = groupedNotes;
            console.log(groupedNotes);
        });
    }
    getPinnedNotes() {
        const out = [];
        this.groupedNotes.map((group) => {
            if (group.notes) {
                group.notes.map((note) => {
                    if (note.pinned === 1) {
                        out.push(note);
                    }
                });
            }
        });
        return this.notesService.sortByDate(out);
    }
    newGroup(group) {
        console.log("heeyyyy");
        console.log(group);
        //this.groups.push(group);
        this.groupService.joinGroup(group.id).subscribe((group) => {
            this.groups.push(group);
            this.modalOpen = false;
        }, err => {
            console.log("error joining group: ", err);
        });
    }
};
GroupsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-groups',
        templateUrl: './groups.component.html',
        styleUrls: ['./groups.component.scss']
    })
], GroupsComponent);
export { GroupsComponent };
//# sourceMappingURL=groups.component.js.map
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {

  id: string = null;
  @Output() joinedGroup = new EventEmitter<Group>();

  constructor(
    private groupService: GroupsService,
  ) { }

  ngOnInit() {
  }

  join(): void {
    if (this.id) {
      this.groupService.joinGroup(this.id).subscribe((group: Group) => {
        this.joinedGroup.emit(group);
      })
    }
  }

}

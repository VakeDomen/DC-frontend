import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/group';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

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
    public lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
  }

  join(): void {
    if (this.id) {
      this.groupService.joinGroup(this.id).subscribe((group: Group) => {
        this.joinedGroup.emit(group);
        this.toast.success(this.lang.getText("Success"), this.lang.getText("join group success"));
      }, err => {
        this.toast.error(this.lang.getText("Error"), this.lang.getText("join group err"));
      })
    }
  }

}

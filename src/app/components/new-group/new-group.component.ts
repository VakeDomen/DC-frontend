import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';
import { AuthService } from 'src/app/services/auth.service';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  group: Group;
  color: string = "#50D0D0";
  @Output() createdGroup = new EventEmitter<Group>();

  constructor(
    private groupService: GroupsService,
    private authService: AuthService,
    public lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.group = new Group();
  }

  submit(): void {
    this.group.preprareForUpload(this.authService.loggedUser(), this.color);
    this.groupService.createGroup(this.group).subscribe((createdGroup: Group) => {
      this.createdGroup.emit(createdGroup);
      this.toast.success(this.lang.getText("Success"), this.lang.getText("group created success"));
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("group created error"));
    })
  }

  colorChange(color: string) {
    this.color = color;
  }
}

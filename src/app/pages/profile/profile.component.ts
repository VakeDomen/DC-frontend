import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { GroupedNotes } from 'src/app/models/grouped-notes';
import { GroupsService } from 'src/app/services/groups.service';
import { NotesService } from 'src/app/services/notes.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  groupedNotes: GroupedNotes[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private noteService: NotesService,
    private toast: ToastrService,
    private lang: LangService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getUserGroupNotes().subscribe((gnotes: GroupedNotes[]) => {
      this.groupedNotes = gnotes;
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
    });
    this.userService.getUser(id).subscribe((user: User) => {
      this.user = user;
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
    })
  }

}

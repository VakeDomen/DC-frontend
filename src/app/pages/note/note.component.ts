import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-note-page',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NotePageComponent implements OnInit {

  note: Note;
  user: User;
  editModal: boolean = false;

  constructor(
    private noteService: NotesService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    public lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id).subscribe((note: Note) => {
      this.note = note;
      this.userService.getUser(this.note.user_id).subscribe((user: User) => {
        this.user = user;
      }, err => {
        this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
      })
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("500"));
    });
  }

  isNoteOwner(): boolean {
    if (!this.auth.loggedUser() || !this.note) {
      return false;
    }
    return this.auth.loggedUser().id === this.note.user_id;
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.note.id).subscribe((note: Note) => {
      this.toast.success(this.lang.getText("Success"), this.lang.getText("note delete success"));
      this.router.navigate(["/dashboard"])
    }, err => {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("note delete error"));
    })
  }

  editNote(note: Note): void {
    this.note = note;
    this.editModal = false;
  }

}

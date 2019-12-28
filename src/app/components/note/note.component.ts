import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() displayBodyLength: number = 300;
  @Input() color: string =  "#00d1b2";

  constructor() { }

  ngOnInit() {
  }


  shorten(body: string): string {
    return body.slice(0, this.displayBodyLength) + (body.length > this.displayBodyLength ? '...' : '');
  }

  parseDate(date_tag: string): string {
    let date = new Date(date_tag);
    if (new Date().getUTCDay() === date.getUTCDay()) {
      return "Today, " + date.toTimeString().split(" ")[0];
    } else {
      return date.toDateString().toString();
    }
    
  }
}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent {

  @Input() label = 'Pick a date';
  @Output() date = new EventEmitter<Date>();



  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //event.value.setHours(12);
    this.date.emit(event.value);

  }
}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent {

  @Input() label = 'Pick a date';
  @Input() timePicker = true;
  @Input() time = '12:00';


  @Output() date = new EventEmitter<Date>();
  dateSelected: Date;

  emit() {
    this.dateSelected.setHours(+this.time.split(':')[0]);
    this.dateSelected.setMinutes(+this.time.split(':')[1]);
    this.date.emit(this.dateSelected);
  }

  addDate(type: string, event) {
    this.dateSelected = event.value;
    if (!this.time) {
      this.time = '12:00';
    }
    this.emit();
  }

  addTime(type: string, event) {
    this.time = event;
    if (!this.dateSelected) {
      this.dateSelected = new Date();
    }
    this.emit();
  }
}

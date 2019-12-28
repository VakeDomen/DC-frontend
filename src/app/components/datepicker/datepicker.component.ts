import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { LangService } from 'src/app/services/lang.service';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent {

  constructor(
    private lang: LangService,
  ){}

  @Input() label = this.lang.getText('Pick a date');
  @Input() timePicker = true;
  @Input() time = '12:00';
  @Input() dateSelected: Date;
  @Input() rowSeperated: boolean = false;

  @Output() date = new EventEmitter<Date>();
  

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

import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let DatepickerComponent = class DatepickerComponent {
    constructor() {
        this.label = 'Pick a date';
        this.timePicker = true;
        this.time = '12:00';
        this.date = new EventEmitter();
    }
    emit() {
        this.dateSelected.setHours(+this.time.split(':')[0]);
        this.dateSelected.setMinutes(+this.time.split(':')[1]);
        this.date.emit(this.dateSelected);
    }
    addDate(type, event) {
        this.dateSelected = event.value;
        if (!this.time) {
            this.time = '12:00';
        }
        this.emit();
    }
    addTime(type, event) {
        this.time = event;
        if (!this.dateSelected) {
            this.dateSelected = new Date();
        }
        this.emit();
    }
};
tslib_1.__decorate([
    Input()
], DatepickerComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input()
], DatepickerComponent.prototype, "timePicker", void 0);
tslib_1.__decorate([
    Input()
], DatepickerComponent.prototype, "time", void 0);
tslib_1.__decorate([
    Output()
], DatepickerComponent.prototype, "date", void 0);
DatepickerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-datepicker',
        templateUrl: './datepicker.component.html',
        styleUrls: ['./datepicker.component.scss']
    })
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map
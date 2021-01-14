import { Component } from "@angular/core";

@Component({
  selector: "nz-demo-date-picker-range-picker",
  template: `
    <nz-select
      [(ngModel)]="selectedValue"
      (ngModelChange)="onSelectChange($event)"
    >
      <nz-option
        *ngFor="let option of optionList"
        [nzValue]="option.value"
        [nzLabel]="option.label"
      ></nz-option>
    </nz-select>
    <p>The selected option's is {{ selectedValue }}</p>

    <nz-range-picker
      [(ngModel)]="date"
      (ngModelChange)="onRangePickerChange($event)"
      [nzMode]="selectedValue"
    ></nz-range-picker>
  `,
  styles: [``]
})
export class NzDemoDatePickerRangePickerComponent {
  optionList = [
    { label: "Date", value: "date" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" }
  ];

  selectedValue = "date";
  date = null;

  onSelectChange(value: any): void {
    console.log(value);
  }

  onRangePickerChange(result: Date[]): void {
    console.log("onChange: ", result);
  }


}

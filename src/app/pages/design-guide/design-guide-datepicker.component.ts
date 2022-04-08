import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-datepicker',
  template: `
    <table>
      <tr>
        <td>年度</td>
        <td>月度區間</td>
        <td>月度</td>
      </tr>
      <tr>
        <td>
          <nz-date-picker nzMode="year"></nz-date-picker>
        </td>
        <td>
          <nz-range-picker nzMode="month"></nz-range-picker>
        </td>
        <td>
          <nz-date-picker nzMode="month"></nz-date-picker>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
    table td { padding: 5px; }
    `]
})
export class DesignGuideDatePickerComponent implements OnInit {

  constructor() { 
    console.log("DesignGuideDatePickerComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideDatePickerComponent","ngOnInit");
  }
}
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-switch',
  template: ` 
    <h1>Switch</h1>
    <table>
      <tr>
        <td></td>
        <td>Default</td>
        <td>Disable</td>
      </tr>
      <tr>
        <td>Close</td>
        <td>
          <nz-switch></nz-switch>
        </td>
        <td>
          <nz-switch nzDisabled></nz-switch>
        </td>
      </tr>
      <tr>
        <td>Open</td>
        <td>
          <nz-switch [ngModel]="true"></nz-switch>
        </td>
        <td>
          <nz-switch [ngModel]="true" nzDisabled></nz-switch>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
       table td { padding: 5px; }
    `]
})
export class DesignGuideSwitchComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideSwitchComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideSwitchComponent","ngOnInit");
  }


}
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-radio',
  template: ` 
    <h1>Radio</h1>
    <div style="background: linear-gradient(180deg, #183B5E 0%, #0B1B2B 100%); color: #fff">
      <table>
        <tr>
          <td>Default</td>
          <td>
            <label nz-radio ngModel>我是單選樣式</label>
          </td>
        </tr>
        <tr>
          <td>Hover</td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Active</td>
          <td>
            <nz-radio-group [ngModel]="'A'">
              <label nz-radio nzValue="A">A</label>
              <label nz-radio nzValue="B">B</label>
              <label nz-radio nzValue="C">C</label>
              <label nz-radio nzValue="D">D</label>
            </nz-radio-group>
          </td>
        </tr>
        <tr>
          <td>Disable</td>
          <td>
            <label nz-radio ngModel nzDisabled>我是單選樣式</label>
            
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: [
    `
      table td { padding: 5px; }
    `]
})
export class DesignGuideRadioComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideRadioComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideRadioComponent","ngOnInit");
  }


}
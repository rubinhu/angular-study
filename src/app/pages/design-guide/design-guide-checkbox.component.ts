import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-checkbox',
  template: ` 
    <h1>Checkbox</h1>
    <div style="background: linear-gradient(180deg, #183B5E 0%, #0B1B2B 100%); color: #fff">
      <table>
        <tr>
          <td>Default</td>
          <td>
            <label nz-checkbox>我是多選樣式</label>
          </td>
        </tr>
        <tr>
          <td>Hover</td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Active 1</td>
          <td>
            <label nz-checkbox [ngModel]="'true'" >我是多選樣式</label>
          </td>
        </tr>
        <tr>
          <td>Active 2</td>
          <td>
            <label nz-checkbox [nzIndeterminate]="'true'" >我是多選樣式</label>
          </td>
        </tr>
        <tr>
          <td>Disable</td>
          <td>
            <label nz-checkbox nzDisabled>我是多選樣式</label>
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
export class DesignGuideCheckboxComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideCheckboxComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideCheckboxComponent","ngOnInit");
  }


}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-icon',
  template: ` 
    <h1>Icons</h1>
    <table>
      <tr>
        <td><i nz-icon nzType="setting" nzTheme="outline"></i></td>
        <td>Setting Menu</td>
        <td><i nz-icon nzType="info-circle" nzTheme="outline"></i></td>
        <td>Formula</td>
      </tr>
      <tr>
        <td><i nz-icon nzType="down" nzTheme="outline"></i></td>
        <td>DropDwon Menu</td>
        <td><nz-empty [nzNotFoundContent]="null"></nz-empty></td>
        <td>Nodata</td>
      </tr>
      <tr>
        <td><i nz-icon nzType="up" nzTheme="outline"></i></td>
        <td>DropUp Menu</td>
        <td><i nz-icon nzType="question" nzTheme="outline"></i></td>
        <td>Question</td>
      </tr>
      <tr>
        <td><i nz-icon nzType="download" nzTheme="outline"></i></td>
        <td>Download Button icon</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><i nz-icon nzType="close-circle" nzTheme="outline"></i></td>
        <td>Fail Message</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><i nz-icon nzType="check-circle" nzTheme="outline"></i></td>
        <td>Success Message</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><i nz-icon nzType="info-circle" nzTheme="outline"></i></td>
        <td>Warning Message</td>
        <td></td>
        <td></td>
      </tr>
    </table>
    
  `,
  styles: [
    `
       table td { padding: 5px; }

    `]
})
export class DesignGuideIconComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideIconComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideIconComponent","ngOnInit");
  }
}
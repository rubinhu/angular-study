import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-button',
  template: ` 
    <table>
      <tr>
        <td></td>
        <td>Primery</td>
        <td>Nagtive</td>
        <td>返回</td>
        <td>iconbutton</td>
      </tr>
      <tr>
        <td>Default</td>
        <td>
          <button nz-button nzType="primary">查看</button>
        </td>
        <td>
          <button nz-button nzType="default">查看</button>
        </td>
        <td>
          <button nz-button nzType="primary" nzShape="round"><i nz-icon nzType="arrow-left"></i></button>
        </td>
        <td>
          <button nz-button nzType="primary" nzShape="round">
            <i nz-icon nzType="download"></i>
            Download
          </button>
        </td>
      </tr>
      <tr>
        <td>Hover</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Disable</td>
        <td>
          <button nz-button nzType="primary" disabled>查看</button>
        </td>
        <td>
          <button nz-button nzType="default" disabled>查看</button>
        </td>
        <td>
          <button nz-button nzType="primary" nzShape="round" disabled><i nz-icon nzType="arrow-left"></i></button>
        </td>
        <td>
          <button nz-button nzType="primary" nzShape="round" disabled>
            <i nz-icon nzType="download"></i>
            Download
          </button>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
    table td { padding: 20px; }

    table tr:first-child { text-align: center; }
    `]
})
export class DesignGuideButtonComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideButtonComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideButtonComponent","ngOnInit");
  }


}
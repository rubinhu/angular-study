import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-loading',
  template: `
    <h1>Loading</h1>
    <div>
      <nz-spin [nzSpinning]="isSpinning">
        <button nz-button nzType="primary">Primary Button</button>
        <div class="example">
          <nz-spin [nzSpinning]="!isSpinning" [nzSimple]="isSpinning">
            <div style="text-align:left;">
              <button nz-button nzType="primary">Primary Button</button>
            </div>
          </nz-spin>
        </div>
        <div class="example">
          <nz-spin [nzSpinning]="!isSpinning" [nzSimple]="isSpinning">
            <div style="text-align:left;">
              <button nz-button nzType="primary">Primary Button</button>
            </div>
          </nz-spin>
        </div>
      </nz-spin>
    </div>
    <br />
    <div>
      Global loading ：
      <nz-switch [(ngModel)]="isSpinning"></nz-switch>
    </div>
  `,
  styles: [
    `
    .example {
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
      }
    `]
})
export class DesignGuideLoadingComponent implements OnInit {
  isSpinning = false;

  constructor() { 
    console.log("DesignGuideLoadingComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideLoadingComponent","ngOnInit");
  }


}
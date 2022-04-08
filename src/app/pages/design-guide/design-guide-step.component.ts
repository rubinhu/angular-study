import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-step',
  template: ` 
    <h1>Step</h1>
    <nz-steps [nzCurrent]="0">
      <nz-step nzTitle="申請資訊"></nz-step>
      <nz-step nzTitle="申請資訊"></nz-step>
    </nz-steps>
    <br /><br />
    <nz-steps [nzCurrent]="1">
      <nz-step nzTitle="申請資訊"></nz-step>
      <nz-step nzTitle="申請資訊"></nz-step>
    </nz-steps>
    <br /><br /><br /><br />
    <nz-steps [nzCurrent]="0">
      <nz-step nzTitle="申請資訊" nzDescription="填寫申請環境及申請人相關訊息"></nz-step>
      <nz-step nzTitle="申請資訊" nzDescription="填寫申請環境及申請人相關訊息"></nz-step>
    </nz-steps>
    <br /><br />
    <nz-steps [nzCurrent]="1">
      <nz-step nzTitle="申請資訊" nzDescription="填寫申請環境及申請人相關訊息"></nz-step>
      <nz-step nzTitle="申請資訊" nzSubtitle="Left 00:00:08" nzDescription="填寫申請環境及申請人相關訊息"></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideStepComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideStepComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideStepComponent","ngOnInit");
  }
}
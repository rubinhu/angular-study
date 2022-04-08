import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-tab',
  template: ` 
    <h1>Tab</h1>
    Main tab
    <nz-tabset nzType="card">
      <nz-tab nzTitle="選項一">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="選項二">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="選項三">Content of Tab Pane 3</nz-tab>
    </nz-tabset>
    Sub nz-tab
    <nz-tabset>
      <nz-tab nzTitle="選項一">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="選項二">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="選項三3">Content of Tab Pane 3</nz-tab>
    </nz-tabset>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideTabComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideTabComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideTabComponent","ngOnInit");
  }
}
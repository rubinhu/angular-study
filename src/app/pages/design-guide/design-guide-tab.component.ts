import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-tab',
  template: ` 
    <h1>Tab</h1>
    Main tab
    <div style="background: linear-gradient(180deg, #183B5E 0%, #0B1B2B 100%);">
      <nz-tabset nzType="card">
        <nz-tab nzTitle="選項一">Content of Tab Pane 1</nz-tab>
        <nz-tab nzTitle="選項二">Content of Tab Pane 2</nz-tab>
        <nz-tab nzTitle="選項三">Content of Tab Pane 3</nz-tab>
      </nz-tabset>
    </div>  
    Sub nz-tab
    <div style="background: linear-gradient(180deg, #183B5E 0%, #0B1B2B 100%);">
      <nz-tabset>
        <nz-tab nzTitle="選項一">Content of Tab Pane 1</nz-tab>
        <nz-tab nzTitle="選項二">Content of Tab Pane 2</nz-tab>
        <nz-tab nzTitle="選項三3">Content of Tab Pane 3</nz-tab>
      </nz-tabset>
    </div>  
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
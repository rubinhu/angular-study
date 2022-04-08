import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-rcs',
  template: ` 
    <h1>Radio, Checkbox and Swith</h1> <br />
    <div nz-row>
      <div nz-col nzSpan="12">
        <design-guide-checkbox></design-guide-checkbox>
      </div>
      <div nz-col nzSpan="12">
        <design-guide-switch></design-guide-switch>
      </div>
    </div>
    <br />
    <div nz-row>
      <div nz-col nzSpan="12">
        <design-guide-radio></design-guide-radio>
      </div>
      <div nz-col nzSpan="12"></div>
    </div>
    
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideRcsComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideRcsComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideRcsComponent","ngOnInit");
  }


}
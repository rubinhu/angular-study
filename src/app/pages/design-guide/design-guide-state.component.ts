import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-state',
  template: ` 
    <h1>State</h1>
    TBD
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideStateComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideStateComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideStateComponent","ngOnInit");
  }
}
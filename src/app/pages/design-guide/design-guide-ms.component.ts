import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-guide-ms',
  template: ` 
    <h1>Message and State</h1>
    <design-guide-message></design-guide-message>
    <br />
    <design-guide-state></design-guide-state>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideMsComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideMsComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideMsComponent","ngOnInit");
  }
}
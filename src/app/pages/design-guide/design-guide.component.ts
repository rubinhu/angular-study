import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide',
  template: `
    Design Guide
  `,
  styles: [
    `
    `]
})
export class DesignGuideComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideComponent","ngOnInit");
  }
}
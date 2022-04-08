import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-fontstyle',
  template: `
    <h1>Font</h1>
    <p>英文字體：<em>Hello World</em></p>
    <p>中文字體：<em>你好，世界</em></p>
  `,
  styles: [
    `
    `]
})
export class DesignGuideFontStyleComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideFontStyleComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideFontStyleComponent","ngOnInit");
  }
}
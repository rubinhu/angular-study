import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-colorstyle',
  template: `
    <h1>品牌色</h1>
    <div>Primary</div>
    <div>Secondary</div>
    <h1>系統色</h1>
    <div>安全/成功</div>
    <div>注意</div>
    <div>警示/失敗</div>
    <div>額外狀態</div>
    <h1>文字色</h1>
    <div>基本資訊</div>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
  `,
  styles: [
    `
    `]
})
export class DesignGuideColorStyleComponent implements OnInit {


  constructor() { 
    console.log("DesignGuideColorStyleComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideColorStyleComponent","ngOnInit");
  }
}
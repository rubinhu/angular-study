import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-colorstyle',
  template: `
    <h1><div>品牌色</div></h1>
    <div class="bg-primary-color">Primary</div>
    <div class="bg-secondary-color">Secondary</div>
    <h1>系統色</h1>
    <div class="bg-success-color">安全/成功</div>
    <div class="bg-warning-color">注意</div>
    <div class="bg-error-color">警示/失敗</div>
    <div class="bg-additional-color">額外狀態</div>
    <h1>文字色</h1>
    <div>基本資訊</div>
    <div class="text-opacity-initial">A</div>
    <div class="text-opacity-nine">B</div>
    <div class="text-opacity-seven">C</div>
    <div class="text-opacity-five">D</div>
    <div class="text-opacity-three">E</div>
    <div class="text-opacity-one">F</div>
    <div class="text-opacity-zero">G</div>
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
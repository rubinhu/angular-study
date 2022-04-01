import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
   <nz-tabset>
    <nz-tab nzTitle="动态增减表单项">
      <form-dynamic></form-dynamic>
    </nz-tab>
    <nz-tab nzTitle="响应式表单验证">
      <form-reactive></form-reactive>
    </nz-tab>
    <nz-tab nzTitle="模板驱动表单验证">
    <form-template></form-template>
    </nz-tab>
    <nz-tab nzTitle="自动提示">
      <form-auto-tips></form-auto-tips>
    </nz-tab>
    <nz-tab nzTitle="表单联动">
    <form-coordinated></form-coordinated>
    </nz-tab>
    <nz-tab nzTitle="表单布局">
      <form-layout></form-layout>
    </nz-tab>
    <nz-tab nzTitle="动态校验规则">
      <form-dynamic-rule></form-dynamic-rule>
    </nz-tab>
  </nz-tabset>
  `,
  styles: [
    `
    `]
})
export class FormComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit(): void {

  }


}
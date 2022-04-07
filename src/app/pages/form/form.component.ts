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
  <nz-tabset>
    <nz-tab nzTitle="搜索用户">
      <em>一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。</em>
      <select-users></select-users>
    </nz-tab>
    <nz-tab nzTitle="下拉加载">
      <em>一个带有下拉加载远程数据的例子。</em>
      <select-scroll-load></select-scroll-load>
    </nz-tab>
    
  </nz-tabset>
  `,
  styles: [
    `
    `]
})
export class FormComponent implements OnInit {


  constructor() {
    console.log("FormComponent","constructor");
  }

  ngOnInit(): void {
    console.log("FormComponent","ngOnInit");
  }


}
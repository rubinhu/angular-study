import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormAutoTipsComponent } from './form-auto-tips.component';
import { FormCoordinatedComponent } from './form-coordinated.component';
import { FormDynamicComponent } from './form-dynamic.component';
import { FormDynamicRuleComponent } from './form-dynamic-rule.component';
import { FormLayoutComponent } from './form-layout.component';
import { FormReactiveComponent } from './form-reactive.component';
import { FormTemplateComponent } from './form-template.component';
import { SelectUsersComponent } from './select-users.component';
import { SelectScrollLoadComponent } from './select-scroll-load.compontent';

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule, FormRoutingModule, DemoNgZorroAntdModule
  ],
  declarations: [
    FormComponent, FormAutoTipsComponent, FormCoordinatedComponent, FormDynamicComponent,
    FormDynamicRuleComponent, FormLayoutComponent, FormReactiveComponent, FormTemplateComponent,
    SelectUsersComponent, SelectScrollLoadComponent],
  exports: []
})
export class FormModule { }

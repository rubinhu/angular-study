import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-layout',
  template: `
   <form nz-form [nzLayout]="validateLayoutForm.get('formLayout')?.value" [formGroup]="validateLayoutForm"
      (ngSubmit)="submitLayoutForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Form Layout</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null">
          <nz-radio-group formControlName="formLayout">
            <label nz-radio-button [nzValue]="'horizontal'">Horizontal</label>
            <label nz-radio-button [nzValue]="'vertical'">Vertical</label>
            <label nz-radio-button [nzValue]="'inline'">Inline</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Username</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" nzErrorTip="Please input your username!">
          <input nz-input formControlName="userName" placeholder="input username" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="isHorizontal ? 4 : null">Password</nz-form-label>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" nzErrorTip="Please input your Password!">
          <input nz-input formControlName="passWord" placeholder="input password" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="isHorizontal ? 14 : null" [nzOffset]="isHorizontal ? 4 : null">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    `]
})
export class FormLayoutComponent implements OnInit {


  constructor(private layoutFB: FormBuilder) {
    // 表单布局
    this.validateLayoutForm = this.layoutFB.group({
      formLayout: ['horizontal'],
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  //#region 表单布局
  validateLayoutForm!: FormGroup;

  submitLayoutForm(): void {
    if (this.validateLayoutForm.valid) {
      console.log('submit', this.validateLayoutForm.value);
    } else {
      Object.values(this.validateLayoutForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  get isHorizontal(): boolean {
    return this.validateLayoutForm.controls["formLayout"]?.value === 'horizontal';
  }

  //#endregion

}

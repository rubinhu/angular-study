import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-dynamic-rule',
  template: `
   <form nz-form [formGroup]="validateDynamicRuleForm" (ngSubmit)="submitDynamicRuleForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzRequired nzFor="name">Name</nz-form-label>
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your name">
          <input type="text" nz-input formControlName="name" placeholder="Please input your name" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="4" nzFor="nickname" [nzRequired]="validateDynamicRuleForm.get('required')?.value">
          Nickname
        </nz-form-label>
        <nz-form-control [nzSpan]="8" nzErrorTip="Please input your nickname">
          <input type="text" nz-input formControlName="nickname" placeholder="Please input your nickname" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="8" [nzOffset]="4">
          <label nz-checkbox formControlName="required" (ngModelChange)="requiredChange($event)">
            Nickname is required
          </label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="8" [nzOffset]="4">
          <button nz-button nzType="primary" [disabled]="!validateDynamicRuleForm.valid">Check</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    `]
})
export class FormDynamicRuleComponent implements OnInit {


  constructor(private dynamicRuleFB: FormBuilder) {
    // 动态校验规则
    this.validateDynamicRuleForm = this.dynamicRuleFB.group({
      name: [null, [Validators.required]],
      nickname: [null],
      required: [false]
    });
  }

  ngOnInit(): void {
    console.log("FormDynamicRuleComponent","ngOnInit");
  }

  //#region 动态校验规则
  validateDynamicRuleForm!: FormGroup;

  submitDynamicRuleForm(): void {
    if (this.validateDynamicRuleForm.valid) {
      console.log('submit', this.validateDynamicRuleForm.value);
    } else {
      Object.values(this.validateDynamicRuleForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateDynamicRuleForm.get('nickname')!.clearValidators();
      this.validateDynamicRuleForm.get('nickname')!.markAsPristine();
    } else {
      this.validateDynamicRuleForm.get('nickname')!.setValidators(Validators.required);
      this.validateDynamicRuleForm.get('nickname')!.markAsDirty();
    }
    this.validateDynamicRuleForm.get('nickname')!.updateValueAndValidity();
  }

  //#endregion

}

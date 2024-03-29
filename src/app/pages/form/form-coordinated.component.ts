import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-coordinated',
  template: `
    <form nz-form [formGroup]="validateCoordinatedForm" (ngSubmit)="submitCoordinatedForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="5" nzFor="gender" nzRequired>Gender</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please select your gender!">
          <nz-select id="gender" formControlName="gender" nzPlaceHolder="Select a option and change input text above"
            (ngModelChange)="genderChange($event)">
            <nz-option nzValue="male" nzLabel="male"></nz-option>
            <nz-option nzValue="female" nzLabel="female"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5" nzRequired nzFor="note">Note</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please input your username!">
          <input id="note" type="text" nz-input formControlName="note" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="12" [nzOffset]="5">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    `]
})
export class FormCoordinatedComponent implements OnInit {


  constructor(private coordinatedFB: FormBuilder) {
    // 表单联动
    this.validateCoordinatedForm = this.coordinatedFB.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log("FormCoordinatedComponent","ngOnInit");
  }

  //#region 表单联动
  validateCoordinatedForm!: FormGroup;

  submitCoordinatedForm(): void {
    if (this.validateCoordinatedForm.valid) {
      console.log('submit', this.validateCoordinatedForm.value);
    } else {
      Object.values(this.validateCoordinatedForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  genderChange(value: string): void {
    this.validateCoordinatedForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  //#endregion

}

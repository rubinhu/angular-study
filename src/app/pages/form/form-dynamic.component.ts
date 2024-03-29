import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-dynamic',
  template: `
   <form nz-form [formGroup]="validateDynamicForm" (ngSubmit)="submitDynamicForm()">
      <nz-form-item *ngFor="let control of listOfControl; let i = index">
        <nz-form-label [nzXs]="24" [nzSm]="4" *ngIf="i === 0" [nzFor]="control.controlInstance">
          Passengers
        </nz-form-label>
        <nz-form-control [nzXs]="24" [nzSm]="20" [nzOffset]="i === 0 ? 0 : 4"
          nzErrorTip="Please input passenger's name or delete this field.">
          <input class="passenger-input" nz-input placeholder="placeholder" [attr.id]="control.id"
            [formControlName]="control.controlInstance" />
          <button nz-button nzType="text" nzShape="circle" [disabled]="listOfControl.length === 1">
            <em nz-icon nzType="minus-circle-o" class="dynamic-delete-button"
              (click)="removeField(control, $event)"></em></button>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 20, offset: 4 }">
          <button nz-button nzType="dashed" class="add-button" (click)="addField($event)">
            <em nz-icon nzType="plus"></em>
            Add field
          </button>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzXs]="{ span: 24, offset: 0 }" [nzSm]="{ span: 20, offset: 4 }">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }

  .dynamic-delete-button:hover {
    color: #777;
  }

  .passenger-input {
    width: 60%;
    margin-right: 8px;
  }

  [nz-form] {
    max-width: 600px;
  }

  .add-button {
    width: 60%;
  }
    `]
})
export class FormDynamicComponent implements OnInit {


  constructor(private dynamicFB: FormBuilder,) {
    // 动态增减表单项
    this.validateDynamicForm = this.dynamicFB.group({});
    this.addField();
  }

  ngOnInit(): void {
    console.log("FormDynamicComponent","ngOnInit");
  }

  //#region 动态增减表单项
  validateDynamicForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateDynamicForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateDynamicForm.removeControl(i.controlInstance);
    }
  }

  submitDynamicForm(): void {
    if (this.validateDynamicForm.valid) {
      console.log('submit', this.validateDynamicForm.value);
    } else {
      Object.values(this.validateDynamicForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  //#endregion

}

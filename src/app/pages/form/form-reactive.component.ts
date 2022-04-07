import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'form-reactive',
  template: `
   <form nz-form [formGroup]="validateReactiveForm" (ngSubmit)="submitReactiveForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Username</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="userErrorTpl">
          <input nz-input formControlName="userName" placeholder="async validate try to write JasonWood" />
          <ng-template #userErrorTpl let-control>
            <ng-container *ngIf="control.hasError('required')">Please input your username!</ng-container>
            <ng-container *ngIf="control.hasError('duplicated')">The username is redundant!</ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>E-mail</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="emailErrorTpl">
          <input nz-input formControlName="email" placeholder="email" type="email" />
          <ng-template #emailErrorTpl let-control>
            <ng-container *ngIf="control.hasError('email')">The input is not valid E-mail!</ng-container>
            <ng-container *ngIf="control.hasError('required')">Please input your E-mail!</ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Please input your password!">
          <input nz-input type="password" formControlName="password" (ngModelChange)="validateConfirmPassword()" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="passwordErrorTpl">
          <input nz-input type="password" formControlName="confirm" placeholder="confirm your password" />
          <ng-template #passwordErrorTpl let-control>
            <ng-container *ngIf="control.hasError('required')">Please confirm your password!</ng-container>
            <ng-container *ngIf="control.hasError('confirm')">Password is inconsistent!</ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Comment</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please write something here!">
          <textarea formControlName="comment" nz-input rows="2" placeholder="write any thing"></textarea>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzOffset]="7" [nzSpan]="12">
          <button nz-button nzType="primary" [disabled]="!validateReactiveForm.valid">Submit</button>
          <button nz-button (click)="resetForm($event)">Reset</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    `]
})
export class FormReactiveComponent implements OnInit {


  constructor(private reactiveFB: FormBuilder) {
    // 响应式表单验证
    this.validateReactiveForm = this.reactiveFB.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log("FormReactiveComponent","ngOnInit");
  }


  //#region 响应式表单验证

  /** 
   *响应式表单验证
我们在 nz-form-control 上 提供了 nzValidateStatusnzHasFeedback 等属性，当使用响应式表单时，可以自己定义校验的时机和内容。

nzValidateStatus: 校验状态，默认自动从 nz-form-control 中的 NgControl 获得校验状态，也可以手动指定为特定的 NgControl。
nzHasFeedback：用于给输入框添加反馈图标。
nzSuccessTipnzWarningTipnzErrorTipnzValidatingTip：设置不同状态校验文案。
当同一种状态下存在多种提示情况时，nzSuccessTipnzWarningTipnzErrorTipnzValidatingTip 均支持传入 TemplateRef<{ $implicit: FormControl } 类型，可以通过模板变量导出 FormControl 后用于切换不同的提示信息。 当 FormControl.status 为 INVALID 并且错误包含 {warning：true} 时，nz-form-control 显示警告状态。
   */
  validateReactiveForm: FormGroup;

  submitReactiveForm(): void {
    console.log('submit', this.validateReactiveForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateReactiveForm.reset();
    for (const key in this.validateReactiveForm.controls) {
      if (this.validateReactiveForm.controls.hasOwnProperty(key)) {
        this.validateReactiveForm.controls[key].markAsPristine();
        this.validateReactiveForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateReactiveForm.controls["confirm"].updateValueAndValidity());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateReactiveForm.controls["password"].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  //#endregion



}

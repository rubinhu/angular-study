import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'form-auto-tips',
  template: `
   <form nz-form [nzAutoTips]="autoTips" [formGroup]="validateAutoTipsForm" (ngSubmit)="submitAutoTipsForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Username</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidatingTip="Validating...">
          <input nz-input formControlName="userName" placeholder="async validate try to write JasonWood" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Mobile</nz-form-label>
        <nz-form-control [nzSpan]="12">
          <input nz-input formControlName="mobile" placeholder="mobile" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>E-mail</nz-form-label>
        <nz-form-control [nzSpan]="12">
          <input nz-input formControlName="email" placeholder="email" type="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzDisableAutoTips nzErrorTip="Please input your password!">
          <input nz-input type="password" formControlName="password"
            (ngModelChange)="autoTipsValidateConfirmPassword()" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Confirm Password</nz-form-label>
        <nz-form-control [nzSpan]="12" nzDisableAutoTips [nzErrorTip]="passwordErrorTpl">
          <input nz-input type="password" formControlName="confirm" placeholder="confirm your password" />
          <ng-template #passwordErrorTpl let-control>
            <ng-container *ngIf="control.hasError('required')">Please confirm your password!</ng-container>
            <ng-container *ngIf="control.hasError('confirm')">Password is inconsistent!</ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzOffset]="7" [nzSpan]="12">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
    `]
})
export class FormAutoTipsComponent implements OnInit {


  constructor(private autoTipsFB: FormBuilder) {
    // 自动提示 use `MyValidators`
    const { required, cusMaxLength, cusMinLength, email, mobile } = MyValidators;
    this.validateAutoTipsForm = this.autoTipsFB.group({
      userName: ['', [required, cusMaxLength(12), cusMinLength(6)], [this.autoTipsUserNameAsyncValidator]],
      mobile: ['', [required, mobile]],
      email: ['', [required, email]],
      password: ['', [required]],
      confirm: ['', [this.autoTipsConfirmValidator]]
    });
  }

  ngOnInit(): void {
    console.log("FormAutoTipsComponent","ngOnInit");
  }

  //#region 自动提示
  validateAutoTipsForm: FormGroup;

  // current locale is key of the nzAutoTips
  // if it is not found, it will be searched again with `default`
  autoTips: Record<string, Record<string, string>> = {
    'zh-cn': {
      required: '必填项'
    },
    en: {
      required: 'Input is required'
    },
    default: {
      email: '邮箱格式不正确/The input is not valid email'
    }
  };

  submitAutoTipsForm(): void {
    if (this.validateAutoTipsForm.valid) {
      console.log('submit', this.validateAutoTipsForm.value);
    } else {
      Object.values(this.validateAutoTipsForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  autoTipsValidateConfirmPassword(): void {
    setTimeout(() => this.validateAutoTipsForm.controls["confirm"].updateValueAndValidity());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  autoTipsUserNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<MyValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({
            duplicated: { 'zh-cn': `用户名已存在`, en: `The username is redundant!` }
          });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  autoTipsConfirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateAutoTipsForm.controls["password"].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  //#endregion


}
//#region 自动提示

// current locale is key of the MyErrorsOptions
export type MyErrorsOptions = { 'zh-cn': string; en: string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

export class MyValidators extends Validators {
  static cusMinLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return { minlength: { 'zh-cn': `最小长度为 ${minLength}`, en: `MinLength is ${minLength}` } };
    };
  }

  static cusMaxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return { maxlength: { 'zh-cn': `最大长度为 ${maxLength}`, en: `MaxLength is ${maxLength}` } };
    };
  }

  static mobile(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value)
      ? null
      : { mobile: { 'zh-cn': `手机号码格式不正确`, en: `Mobile phone number is not valid` } };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /(^1\d{10}$)/.test(value);
}

//#endregion
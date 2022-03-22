import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  date = null;
  isEnglish = false;

  constructor(private i18n: NzI18nService, private reactiveFB: FormBuilder, private dynamicFB: FormBuilder,
    private autoTipsFB: FormBuilder, private coordinatedFB: FormBuilder, private layoutFB: FormBuilder,
    private dynamicRuleFB: FormBuilder) {
    // 动态增减表单项
    this.validateDynamicForm = this.dynamicFB.group({});
    this.addField();

    // 响应式表单验证
    this.validateReactiveForm = this.reactiveFB.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });

    // 自动提示 use `MyValidators`
    const { required, cusMaxLength, cusMinLength, email, mobile } = MyValidators;
    this.validateAutoTipsForm = this.autoTipsFB.group({
      userName: ['', [required, cusMaxLength(12), cusMinLength(6)], [this.autoTipsUserNameAsyncValidator]],
      mobile: ['', [required, mobile]],
      email: ['', [required, email]],
      password: ['', [required]],
      confirm: ['', [this.autoTipsConfirmValidator]]
    });

    // 表单联动
    this.validateCoordinatedForm = this.coordinatedFB.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    });

    // 表单布局
    this.validateLayoutForm = this.layoutFB.group({
      formLayout: ['horizontal'],
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required]]
    });

    // 动态校验规则
    this.validateDynamicRuleForm = this.dynamicRuleFB.group({
      name: [null, [Validators.required]],
      nickname: [null],
      required: [false]
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', "start");
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
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
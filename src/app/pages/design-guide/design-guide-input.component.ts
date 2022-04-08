import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-input',
  template: `
    <h1>Input</h1>
    <table>
      <tr>
        <td></td>
        <td>輸入</td>
        <td>下拉</td>
        <td>日期</td>
        <td>數量</td>
        <td>搜尋</td>
        <td>範圍文字</td>
      </tr>
      <tr>
        <td>Normal</td>
        <td><input nz-input placeholder="Please Enter" [(ngModel)]="value" /></td>
        <td>
          <nz-select nzAllowClear nzPlaceHolder="Please select" [(ngModel)]="selectedValue">
            <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
            <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
            <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
          </nz-select>
        </td>
        <td>
          <nz-date-picker></nz-date-picker>
        </td>
        <td>
          <nz-input-number nzPlaceHolder="Please Enter" [nzMin]="1" [nzStep]="1"></nz-input-number>
        </td>
        <td>
          <nz-input-group [nzSuffix]="suffixIconSearch">
            <input nz-input placeholder="Please Enter" />
          </nz-input-group>
          <ng-template #suffixIconSearch>
            <i nz-icon nzType="search"></i>
          </ng-template>
        </td>
        <td>
          <textarea rows="2" placeholder="Please Enter" nz-input></textarea> 
        </td>
      </tr>
      <tr>
        <td>Normal Hover</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Normal Click</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Active</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Active Hover</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Disable</td>
        <td><input nz-input placeholder="Please Enter" [(ngModel)]="value" [disabled]="true" /></td>
        <td>
          <nz-select nzAllowClear nzPlaceHolder="Please select" [(ngModel)]="selectedValue" nzDisabled>
            <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
            <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
            <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
          </nz-select>
        </td>
        <td>
          <nz-date-picker nzDisabled></nz-date-picker>
        </td>
        <td>
          <nz-input-number nzPlaceHolder="Please Enter" [nzMin]="1" [nzStep]="1" nzDisabled></nz-input-number>
        </td>
        <td>
          <nz-input-group [nzSuffix]="suffixIconSearch">
            <input nz-input placeholder="Please Enter" [disabled]="true" />
          </nz-input-group>
          <ng-template #suffixIconSearch>
            <i nz-icon nzType="search"></i>
          </ng-template>
        </td>
        <td>
          <textarea rows="2" nz-input placeholder="Please Enter" [disabled]="true"></textarea> 
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <form nz-form>
            <nz-form-item>
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <input nz-input placeholder="Please Enter" [(ngModel)]="value" name="errorValid" />
              </nz-form-control>
            </nz-form-item>
          </form>
        </td>
        <td>
          <form nz-form>
            <nz-form-item>
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <nz-select nzAllowClear nzPlaceHolder="Please select" [(ngModel)]="selectedValue" [ngModelOptions]="{standalone: true}">
                  <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
                  <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
                  <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
                </nz-select>
              </nz-form-control>
            </nz-form-item>
          </form>
        </td>
        <td>
          <form nz-form>
            <nz-form-item>
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <nz-date-picker></nz-date-picker>
              </nz-form-control>
            </nz-form-item>
          </form>
        </td> 
        <td>
          <form nz-form>
            <nz-form-item> 
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <nz-input-number nzPlaceHolder="Please Enter" [nzMin]="1" [nzStep]="1"></nz-input-number>
              </nz-form-control>
            </nz-form-item>
          </form>
        </td>
        <td>
          <form nz-form>
            <nz-form-item> 
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <nz-input-group [nzSuffix]="suffixIconSearch">
                  <input nz-input placeholder="Please Enter" />
                </nz-input-group>
                <ng-template #suffixIconSearch>
                  <i nz-icon nzType="search"></i>
                </ng-template>
              </nz-form-control>
            </nz-form-item>
          </form>
        </td>
        <td>
          <form nz-form>
            <nz-form-item>
              <nz-form-control nzValidateStatus="error" nzErrorTip="Error text">
                <textarea rows="2" nz-input placeholder="Please Enter"></textarea> 
              </nz-form-control>
            </nz-form-item>
          </form>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
    table td { padding: 5px; }

    table tr:first-child { text-align: center; }

    nz-input-number {width: 120px;}
    `]
})
export class DesignGuideInputComponent implements OnInit {
  value?: string;
  selectedValue = null;

  constructor() {
    console.log("DesignGuideInputComponent", "constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideInputComponent", "ngOnInit");
  }
}
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'design-guide-modal',
  template: ` 
    <h1>Modal</h1> 
    <button nz-button [nzType]="'primary'" (click)="showNormalModal()"><span>Show Normal Modal</span></button>
    <nz-modal [(nzVisible)]="isNarmalVisible" nzTitle="The Normal Modal (top: 100)" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <p>不設置 modal 的高度，將打開一個默認窗口，位置(top: 100)</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
      </ng-container>
    </nz-modal>
    <button nz-button [nzType]="'primary'" (click)="showLargeModal()"><span>Show Large Modal</span></button>
    <nz-modal [(nzVisible)]="isLargeVisible" nzTitle="The Large Modal ({height:'100vh', top:0})" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()" [nzWidth]="1000" [nzStyle]="{height:'100vh', top:0}">
      <ng-container *nzModalContent>
        <p>打開一個較大的窗口，需要設置窗口的高度和位置(height:'100vh', top:0)，按用戶電腦高度顯示</p>
        <p>Modal对话框
          模态对话框。
          何时使用#
          需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
          另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 NzModalService.confirm() 等方法。
          推荐使用加载Component的方式弹出Modal，这样弹出层的Component逻辑可以与外层Component完全隔离，并且做到可以随时复用，
          在弹出层Component中可以通过依赖注入NzModalRef方式直接获取模态框的组件实例，用于控制在弹出层组件中控制模态框行为。</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p> <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
      </ng-container>
    </nz-modal>
    <br /><br /><br />
    <button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>
    <button nz-button nzType="dashed" (click)="showDeleteConfirm()">Delete</button>
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideModalComponent implements OnInit {
  isNarmalVisible = false;
  isLargeVisible = false;

  constructor(private modal: NzModalService) { 
    console.log("DesignGuideModalComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideModalComponent","ngOnInit");
  }

  showNormalModal(): void {
    this.isNarmalVisible = true;
  }

  showLargeModal(): void {
    this.isLargeVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isNarmalVisible = false;
    this.isLargeVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isNarmalVisible = false;
    this.isLargeVisible = false;
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
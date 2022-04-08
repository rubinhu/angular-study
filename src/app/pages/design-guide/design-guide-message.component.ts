import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'design-guide-message',
  template: ` 
    <h1>Message</h1>
    <button nz-button (click)="createMessage('success','新增成功')">Success</button>
    <button nz-button (click)="createMessage('error','新增失敗')">Error</button>
    <button nz-button (click)="createMessage('warning','請注意請注意')">Warning</button>
    
  `,
  styles: [
    `
       
    `]
})
export class DesignGuideMessageComponent implements OnInit {


  constructor(private message: NzMessageService) { 
    console.log("DesignGuideMessageComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideMessageComponent","ngOnInit");
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }
}
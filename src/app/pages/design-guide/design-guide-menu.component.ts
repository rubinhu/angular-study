import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'design-guide-menu',
  template: `
    <h1>Menu</h1>
    <nz-layout class="app-layout">
      <nz-sider class="menu-sidebar" nzCollapsible nzWidth="256px" nzBreakpoint="md" [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <div class="sidebar-logo">
          <a href="https://ng.ant.design/" target="_blank">
            <img src="https://ng.ant.design/assets/img/logo.svg" alt="logo">
            <h1>Ant Design Of Angular</h1>
          </a>
        </div>
        <ul nz-menu nzMode="inline" nzTheme="dark" [nzInlineCollapsed]="isCollapsed">
        <li
          nz-menu-item
          nz-tooltip
          nzTooltipPlacement="right"
          [nzTooltipTitle]="isCollapsed ? 'Navigation One' : ''"
          nzSelected
        >
          <i nz-icon nzType="mail"></i>
          <span>Navigation One</span>
        </li>
        <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
          <ul>
            <li nz-menu-item>Option 5</li>
            <li nz-menu-item>Option 6</li>
            <li nz-submenu nzTitle="Submenu">
              <ul>
                <li nz-menu-item>Option 7</li>
                <li nz-menu-item>Option 8</li>
              </ul>
            </li>
          </ul>
        </li>
        <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
          <ul>
            <li nz-menu-item>Option 9</li>
            <li nz-menu-item>Option 10</li>
            <li nz-menu-item>Option 11</li>
          </ul>
        </li>
      </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>
          <div class="app-header">
            <span class="header-trigger" (click)="isCollapsed = !isCollapsed">
                <i class="trigger"
                  nz-icon
                  [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
                ></i>
            </span>
          </div>
        </nz-header>
        <nz-content>
          <div class="inner-content">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
      </nz-layout>
    </nz-layout>

    <div class="wrapper">
      <button nz-button nzType="primary" (click)="toggleCollapsed()">
        <i nz-icon [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"></i>
      </button>
      
    </div>
  `,
  styles: [
    `
    .wrapper {
        width: 240px;
      }

      button {
        margin-bottom: 12px;
      }
    `]
})
export class DesignGuideMenuComponent implements OnInit {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { 
    console.log("DesignGuideMenuComponent","constructor");
  }

  ngOnInit(): void {
    console.log("DesignGuideMenuComponent","ngOnInit");
  }
}
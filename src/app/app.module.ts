import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

/** 导入需要使用的语言包 **/
// import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
registerLocaleData(en);
registerLocaleData(zh);
/** 配置 ng-zorro-antd 国际化 **/
import { en_US, NZ_I18N, zh_CN, zh_TW } from 'ng-zorro-antd/i18n';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    /*NzLayoutModule,
    NzMenuModule,*/ DemoNgZorroAntdModule
  ],

  providers: [{
    provide: NZ_I18N,
    useFactory: (localId: string) => {
      switch (localId) {
        case 'en':
          return en_US;
        /** 与 angular.json i18n/locales 配置一致 **/
        case 'zh':
          return zh_CN;
        case 'zh-Hans':
          return zh_TW;
        default:
          return en_US;
      }
    },
    deps: [LOCALE_ID]
  }], /** 根据 LOCALE_ID 自动切换 ng-zorro-antd 语言 **/
  bootstrap: [AppComponent]
})
export class AppModule { }

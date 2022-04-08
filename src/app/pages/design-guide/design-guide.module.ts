import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

import { DesignGuideRoutingModule } from './design-guide-routing.module';
import { DesignGuideComponent } from './design-guide.component';
import { DesignGuideFontStyleComponent } from './design-guide-fontstyle.component';
import { DesignGuideColorStyleComponent } from './design-guide-colorstyle.component';
import { DesignGuideMenuComponent } from './design-guide-menu.component';
import { DesignGuideInputComponent } from './design-guide-input.component';
import { DesignGuideDatePickerComponent } from './design-guide-datepicker.component';
import { DesignGuideLoadingComponent } from './design-guide-loading.component';
import { DesignGuideButtonComponent } from './design-guide-button.component';
import { DesignGuideRadioComponent } from './design-guide-radio.component';
import { DesignGuideCheckboxComponent } from './design-guide-checkbox.component';
import { DesignGuideSwitchComponent } from './design-guide-switch.component';
import { DesignGuideRcsComponent } from './design-guide-rcs.component';
import { DesignGuideMessageComponent } from './design-guide-message.component';
import { DesignGuideStateComponent } from './design-guide-state.component';
import { DesignGuideMsComponent } from './design-guide-ms.component';


@NgModule({
  imports: [CommonModule, FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule, DemoNgZorroAntdModule,
    DesignGuideRoutingModule
  ],
  declarations: [DesignGuideComponent,
    DesignGuideFontStyleComponent, DesignGuideColorStyleComponent,
    DesignGuideMenuComponent, DesignGuideInputComponent, DesignGuideDatePickerComponent, DesignGuideLoadingComponent, DesignGuideButtonComponent,
    DesignGuideRadioComponent, DesignGuideCheckboxComponent, DesignGuideSwitchComponent, DesignGuideRcsComponent,
    DesignGuideMessageComponent, DesignGuideStateComponent, DesignGuideMsComponent],
  exports: []
})
export class DesignGuideModule { }

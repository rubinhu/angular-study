import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: DesignGuideComponent },
  { path: 'fontstyle', component: DesignGuideFontStyleComponent },
  { path: 'colorstyle', component: DesignGuideColorStyleComponent },
  { path: 'menu', component: DesignGuideMenuComponent },
  { path: 'input', component: DesignGuideInputComponent },
  { path: 'datepicker', component: DesignGuideDatePickerComponent },
  { path: 'loading', component: DesignGuideLoadingComponent },
  { path: 'button', component: DesignGuideButtonComponent },
  { path: 'radio', component: DesignGuideRadioComponent },
  { path: 'checkbox', component: DesignGuideCheckboxComponent },
  { path: 'switch', component: DesignGuideSwitchComponent },
  { path: 'rcs', component: DesignGuideRcsComponent },
  { path: 'message', component: DesignGuideMessageComponent },
  { path: 'state', component: DesignGuideStateComponent },
  { path: 'ms', component: DesignGuideMsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignGuideRoutingModule { }

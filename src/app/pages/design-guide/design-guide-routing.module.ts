import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignGuideComponent } from './design-guide.component';
import { DesignGuideFontStyleComponent } from './design-guide-fontstyle.component';
import { DesignGuideColorStyleComponent } from './design-guide-colorstyle.component';
import { DesignGuideMenuComponent } from './design-guide-menu.component';
import { DesignGuideInputComponent } from './design-guide-input.component';
import { DesignGuideDatePickerComponent } from './design-guide-datepicker.component';
import { DesignGuideLoadingComponent } from './design-guide-loading.component';

const routes: Routes = [
  { path: '', component: DesignGuideComponent },
  { path: 'fontstyle', component: DesignGuideFontStyleComponent },
  { path: 'colorstyle', component: DesignGuideColorStyleComponent },
  { path: 'menu', component: DesignGuideMenuComponent },
  { path: 'input', component: DesignGuideInputComponent },
  { path: 'datepicker', component: DesignGuideDatePickerComponent },
  { path: 'loading', component: DesignGuideLoadingComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignGuideRoutingModule { }

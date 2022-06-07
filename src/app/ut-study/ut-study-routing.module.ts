import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtStudyComponent } from './ut-study.component';

const routes: Routes = [{ path: '', component: UtStudyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtStudyRoutingModule { }

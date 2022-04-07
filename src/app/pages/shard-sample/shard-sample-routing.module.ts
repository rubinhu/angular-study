import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShardSampleComponent } from './shard-sample.component';

const routes: Routes = [
  { path: '', component: ShardSampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShardSampleRoutingModule { }

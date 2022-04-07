import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
  { path: 'shard-sample', loadChildren: () => import('./pages/shard-sample/shard-sample.module').then(m => m.ShardSampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

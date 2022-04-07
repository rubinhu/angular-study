import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

import { ShardSampleRoutingModule } from './shard-sample-routing.module';
import { ShardSampleComponent } from './shard-sample.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule, DemoNgZorroAntdModule,
    ShardSampleRoutingModule, SharedModule
  ],
  declarations: [ShardSampleComponent],
  exports: []
})
export class ShardSampleModule { }

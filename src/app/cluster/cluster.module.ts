import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClusterComponent
  ],
  imports: [
    CommonModule,
    ClusterRoutingModule,
    SharedModule
  ]
})
export class ClusterModule { }

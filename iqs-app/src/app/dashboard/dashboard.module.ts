import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
  declarations: [
    DashboardhomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule
  ]
})
export class DashboardModule { }

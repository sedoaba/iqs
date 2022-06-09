import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavModule } from '../shared/nav/nav.module';


@NgModule({
  declarations: [
    DashboardhomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    NavModule
  ]
})
export class DashboardModule { }

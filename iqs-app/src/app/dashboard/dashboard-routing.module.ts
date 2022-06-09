import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardhomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

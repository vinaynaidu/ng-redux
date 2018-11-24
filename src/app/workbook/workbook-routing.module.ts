import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkbookOverviewComponent } from './component/workbook-overview/workbook-overview.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: WorkbookOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkbookRoutingModule { }

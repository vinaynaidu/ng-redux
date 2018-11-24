import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { KeyWorkbooksComponent } from './component/key-workbooks/key-workbooks.component';
import { reducer } from './store/workbook.reducer';
import { SharedModule } from '../shared/shared.module';
import { WorkbookDataService } from './service/workbook-data.service';
import { WorkbookEffects } from './store/workbook.effects';
import { WorkbookListComponent } from './component/workbook-list/workbook-list.component';
import { WorkbookOverviewComponent } from './component/workbook-overview/workbook-overview.component';
import { WorkbookRoutingModule } from './workbook-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WorkbookRoutingModule,
    StoreModule.forFeature('workbooks', reducer),
    EffectsModule.forFeature([WorkbookEffects])
  ],
  declarations: [
    KeyWorkbooksComponent,
    WorkbookListComponent,
    WorkbookOverviewComponent
  ],
  exports: [
  ],
  providers: [
    WorkbookDataService
  ]
})
export class WorkbookModule { }

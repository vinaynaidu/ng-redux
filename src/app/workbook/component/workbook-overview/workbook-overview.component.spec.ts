import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataService } from '../../../core/service/data.service';
import { KeyWorkbooksComponent } from '../key-workbooks/key-workbooks.component';
import { SharedModule } from '../../../shared/shared.module';
import { WorkbookDataService } from '../../service/workbook-data.service';
import { WorkbookListComponent } from '../workbook-list/workbook-list.component';
import { WorkbookOverviewComponent } from './workbook-overview.component';

describe('WorkbookOverviewComponent', () => {
  let component: WorkbookOverviewComponent;
  let fixture: ComponentFixture<WorkbookOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
      ],
      declarations: [
        KeyWorkbooksComponent,
        WorkbookListComponent,
        WorkbookOverviewComponent
      ],
      providers: [
        DataService,
        HttpClient,
        WorkbookDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

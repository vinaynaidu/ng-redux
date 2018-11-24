import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataService } from '../../../core/service/data.service';
import { WorkbookDataService } from '../../service/workbook-data.service';
import { WorkbookListComponent } from './workbook-list.component';

describe('WorkbookListComponent', () => {
  let component: WorkbookListComponent;
  let fixture: ComponentFixture<WorkbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        WorkbookListComponent
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
    fixture = TestBed.createComponent(WorkbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

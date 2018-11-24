import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataService } from '../../../core/service/data.service';
import { KeyWorkbooksComponent } from './key-workbooks.component';
import { WorkbookDataService } from '../../service/workbook-data.service';
import { WorkbookModule } from '../../workbook.module';

describe('KeyWorkbookComponent', () => {
  let component: KeyWorkbooksComponent;
  let fixture: ComponentFixture<KeyWorkbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        KeyWorkbooksComponent
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
    fixture = TestBed.createComponent(KeyWorkbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});

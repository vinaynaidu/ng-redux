import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as _ from 'lodash';

import { CoreModule } from '../../core/core.module';
import { WorkbookDataService } from './workbook-data.service';
import { IWorkbook } from '../interface/workbook';
import { DataService } from '../../core/service/data.service';
import { IKeyWorkbook } from '../interface/key-workbook';
import { IWorkbookLink } from '../interface/workbook-link';

let workbookDataService: WorkbookDataService;
let dataServiceSpy: jasmine.SpyObj<DataService>;

// Mock data
function getMockData(path: string): any {
  const mocks = {
    workbooks: [
      { isLiked: true, url: '' } as IWorkbook,
      { isLiked: false, url: '' } as IWorkbook
    ],
    keyWorkbooks: [
      { name: 'mock-key-workbook-name' } as IKeyWorkbook
    ],
    favouriteWorkbooks: _.range(3).map(i => ({} as IWorkbookLink))
  };

  return _.get(mocks, path);
}

describe('WorkbookDataService', () => {

  beforeEach(() => {

    const spy = jasmine.createSpyObj('DataService', ['getData']);

    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientModule
      ],
      providers: [
        HttpClient,
        WorkbookDataService,
        { provide: DataService, useValue: spy }
      ]
    });

    workbookDataService = TestBed.get(WorkbookDataService);
    dataServiceSpy = TestBed.get(DataService);

  });

  it('should be created', inject([WorkbookDataService], (service: WorkbookDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('When getWorkbooks() is called', () => {

    let response;

    beforeEach(() => {
      dataServiceSpy.getData.and.returnValue(Observable.of(getMockData('workbooks')));
      response = workbookDataService.getWorkbooks();
    });

    it('should call data service with right url', () => {
      expect(dataServiceSpy.getData).toHaveBeenCalledWith('workbook/workbooks');
    });

    it('should have two items in the response', () => {

      response.subscribe(workbooks => {
        expect(workbooks.length).toBe(2);
      });

    });

  });

  describe('When getKeyWorkbooks() is called', () => {

    let response;

    beforeEach(() => {
      dataServiceSpy.getData.and.returnValue(Observable.of(getMockData('keyWorkbooks')));
      response = workbookDataService.getKeyWorkbooks();
    });

    it('should call data service with right url', () => {
      expect(dataServiceSpy.getData).toHaveBeenCalledWith('workbook/key-workbooks');
    });

    it('should have two items in the response', () => {

      response.subscribe(workbooks => {
        expect(workbooks.length).toBe(1);
      });

    });

  });

  describe('When getFavouriteWorkbooks() is called', () => {

    let response;

    beforeEach(() => {
      dataServiceSpy.getData.and.returnValue(Observable.of(getMockData('favouriteWorkbooks')));
      response = workbookDataService.getFavouriteWorkbooks();
    });

    it('should call data service with right url', () => {
      expect(dataServiceSpy.getData).toHaveBeenCalledWith('workbook/favourites');
    });

    it('should have two items in the response', () => {

      response.subscribe(workbooks => {
        expect(workbooks.length).toBe(3);
      });

    });

  });

});

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../../core/service/data.service';
import { IComment } from '../interface/comment';
import { IKeyWorkbook } from '../interface/key-workbook';
import { IWorkbook } from '../interface/workbook';
import { IWorkbookLink } from '../interface/workbook-link';

@Injectable()
export class WorkbookDataService {

  private _workbookPrefix = 'workbook/';

  constructor(private _dataService: DataService) { }

  getWorkbooks(): Observable<IWorkbook[]> {
    return this._dataService.getData<IWorkbook[]>(this._workbookPrefix + 'workbooks');
  }

  getKeyWorkbooks(): Observable<IKeyWorkbook[]> {
    return this._dataService.getData<IKeyWorkbook[]>(this._workbookPrefix + 'key-workbooks');
  }

  getFavouriteWorkbooks(): Observable<IWorkbookLink[]> {
    return this._dataService.getData<IWorkbookLink[]>(this._workbookPrefix + 'favourites');
  }

  getWorkbooksHistory(): Observable<IWorkbookLink[]> {
    return this._dataService.getData<IWorkbookLink[]>(this._workbookPrefix + 'workbook-history');
  }

  getNewsletters(): Observable<IWorkbookLink[]> {
    return this._dataService.getData<IWorkbookLink[]>(this._workbookPrefix + 'newsletters');
  }

  getMoreComments(workbookId: number): Observable<IComment[]> {
    return of([] as IComment[]);
  }

  toggleWorkbookFavourite(workbookId: number, isFavourited: boolean): Observable<IWorkbook> {
    return of({} as IWorkbook);
  }

  toggleWorkbookLike(workbookId: number, isLiked: boolean): Observable<IWorkbook> {
    return of({} as IWorkbook);
  }

  commentOnWorkbook(workbookId: number, comment: string): Observable<IWorkbook> {
    return of({} as IWorkbook);
  }

  getMoreWorkbookComments(workbookId: number): Observable<IComment[]> {
    return of([] as IComment[]);
  }

}

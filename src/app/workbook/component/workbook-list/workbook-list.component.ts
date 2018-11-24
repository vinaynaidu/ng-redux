import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IWorkbook } from '../../interface/workbook';

import * as fromWorkbook from '../../store/workbook-state';
import * as workbookActions from '../../store/workbook.actions';
import * as workbookStateSelectors from '../../store/workbook-state-selectors';
import { Store, select } from '@ngrx/store';
import { WorkbookActionTypes } from '../../store/workbook.actions';

@Component({
  selector: 'app-workbook-list',
  templateUrl: './workbook-list.component.html',
  styleUrls: ['./workbook-list.component.scss']
})
export class WorkbookListComponent implements OnInit {

  workbooks$: Observable<IWorkbook[]>;
  errorMessage: string;

  constructor(private store: Store<fromWorkbook.State>) { }

  ngOnInit() {
    this.store.dispatch(new workbookActions.LoadWorkbooks());
    this.workbooks$ = this.store.pipe(select(workbookStateSelectors.getWorkbooks));
  }

}

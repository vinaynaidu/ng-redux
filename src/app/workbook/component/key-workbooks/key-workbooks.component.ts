import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { IKeyWorkbook } from '../../interface/key-workbook';
import * as fromWorkbook from '../../store/workbook-state';
import * as workbookActions from '../../store/workbook.actions';
import * as workbookStateSelectors from '../../store/workbook-state-selectors';

@Component({
  selector: 'app-key-workbooks',
  templateUrl: './key-workbooks.component.html',
  styleUrls: ['./key-workbooks.component.scss']
})
export class KeyWorkbooksComponent implements OnInit {

  keyWorkbooks$: Observable<IKeyWorkbook[]>;
  errorMessage: string;

  constructor(private store: Store<fromWorkbook.State>) { }

  ngOnInit() {
    this.store.dispatch(new workbookActions.LoadKeyWorkbooks());
    this.keyWorkbooks$ = this.store.pipe(select(workbookStateSelectors.getKeyWorkbooks));
  }

}

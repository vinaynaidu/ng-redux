import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as fromWorkbook from '../../store/workbook-state';
import * as workbookActions from '../../store/workbook.actions';
import * as workbookStateSelectors from '../../store/workbook-state-selectors';

import { WorkbookDataService } from '../../service/workbook-data.service';
import { IWorkbookLink } from '../../interface/workbook-link';
import { WorkbookActionTypes } from '../../store/workbook.actions';

@Component({
  selector: 'app-workbook-overview',
  templateUrl: './workbook-overview.component.html',
  styleUrls: ['./workbook-overview.component.scss']
})
export class WorkbookOverviewComponent implements OnInit {

  favouriteWorkbooks$: Observable<IWorkbookLink[]>;
  workbookHistory$: Observable<IWorkbookLink[]>;
  newsletters$: Observable<IWorkbookLink[]>;

  meow = null;

  constructor(private store: Store<fromWorkbook.State>) { }

  ngOnInit() {

    // Only subscribing to store is done here. Async pipe is used in template so these don't have to be cancelled manually on unload.
    // Angular handles async subscriptions and deletes the subscription when the component is destroyed

    this.store.dispatch(new workbookActions.LoadFavouriteWorkbooks());
    this.favouriteWorkbooks$ = this.store.pipe(select(workbookStateSelectors.getFavouriteWorkbooks));

    this.store.dispatch(new workbookActions.LoadWorkbookHistory());
    this.workbookHistory$ = this.store.pipe(select(workbookStateSelectors.getWorkbookHistory));

    this.store.dispatch(new workbookActions.LoadNewsletters());
    this.newsletters$ = this.store.pipe(select(workbookStateSelectors.getNewsletters));

  }

}

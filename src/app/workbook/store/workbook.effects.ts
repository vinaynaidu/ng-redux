import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IComment } from '../interface/comment';
import { IKeyWorkbook } from '../interface/key-workbook';
import { IWorkbook } from '../interface/workbook';
import { IWorkbookLink } from '../interface/workbook-link';
import { WorkbookDataService } from '../service/workbook-data.service';
import * as workbookActions from './workbook.actions';

@Injectable()
export class WorkbookEffects {

    constructor(private action$: Actions,
        private workbookService: WorkbookDataService) { }

    @Effect()
    // Define an ngrx effect, using pipe to perform multiple actions
    loadKeyWorkbooks$: Observable<Action> = this.action$.pipe(
        // Place an observable on an action type
        ofType(workbookActions.WorkbookActionTypes.LoadKeyWorkbooks),
        // mergeMap: flattens and merges the nested promises resulting from observable, and data service, into a single level promise
        mergeMap((action: workbookActions.LoadWorkbooks) => this.workbookService.getKeyWorkbooks().pipe(
            // Get results of data service, and if everything is okay, dispatch Success action
            map((workbooks: IKeyWorkbook[]) => new workbookActions.LoadKeyWorkbooksSuccess(workbooks)),
            // Dispatch Failure action if data service returned an error
            catchError(err => of(new workbookActions.LoadKeyWorkbooksFailure(err)))
        ))
    );

    @Effect()
    loadWorkbooks$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.LoadWorkbooks),
        mergeMap((action: workbookActions.LoadWorkbooks) => this.workbookService.getWorkbooks().pipe(
            map((workbooks: IWorkbook[]) => new workbookActions.LoadWorkbooksSuccess(workbooks)),
            catchError(err => of(new workbookActions.LoadWorkbooksFailure(err)))
        ))
    );

    @Effect()
    loadFavouriteWorkbooks$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.LoadFavouriteWorkbooks),
        mergeMap((action: workbookActions.LoadFavouriteWorkbooks) => this.workbookService.getFavouriteWorkbooks().pipe(
            map((workbooks: IWorkbookLink[]) => new workbookActions.LoadFavouriteWorkbooksSuccess(workbooks)),
            catchError(err => of(new workbookActions.LoadFavouriteWorkbooksFailure(err)))
        ))
    );

    @Effect()
    loadWorkbookHistory$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.LoadWorkbookHistory),
        mergeMap((action: workbookActions.LoadWorkbookHistory) => this.workbookService.getWorkbooksHistory().pipe(
            map((workbooks: IWorkbookLink[]) => new workbookActions.LoadWorkbookHistorySuccess(workbooks)),
            catchError(err => of(new workbookActions.LoadWorkbookHistoryFailure(err)))
        ))
    );

    @Effect()
    loadNewsletters$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.LoadNewsletters),
        mergeMap((action: workbookActions.LoadNewsletters) => this.workbookService.getNewsletters().pipe(
            map((workbooks: IWorkbookLink[]) => new workbookActions.LoadNewslettersSuccess(workbooks)),
            catchError(err => of(new workbookActions.LoadNewslettersFailure(err)))
        ))
    );

    @Effect()
    loadMoreComments$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.LoadMoreComments),
        map((action: workbookActions.LoadMoreComments) => action.payload),
        mergeMap((workbookId: number) => this.workbookService.getMoreComments(workbookId).pipe(
            map(comments => new workbookActions.LoadMoreCommentsSuccess(comments)),
            catchError(err => of(new workbookActions.LoadMoreCommentsFailure(err)))
        ))
    );

    @Effect()
    toggleWorkbookFavourite$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.ToggleWorkbookFavourite),
        // Use pipe + map to grab request parameters so they can be passed to data service
        map((action: workbookActions.ToggleWorkbookFavourite) => action.payload),
        mergeMap((workbook: IWorkbook) => this.workbookService.toggleWorkbookFavourite(workbook.id, workbook.isStarred).pipe(
            map(updatedWorkbook => new workbookActions.ToggleWorkbookFavouriteSuccess(updatedWorkbook)),
            catchError(err => of(new workbookActions.ToggleWorkbookFavouriteFailure(err)))
        ))
    );

    @Effect()
    toggleWorkbookLike$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.ToggleWorkbookLike),
        map((action: workbookActions.ToggleWorkbookLike) => action.payload),
        mergeMap((workbook: IWorkbook) => this.workbookService.toggleWorkbookLike(workbook.id, workbook.isLiked).pipe(
            map(updatedWorkbook => new workbookActions.ToggleWorkbookLikedSuccess(updatedWorkbook)),
            catchError(err => of(new workbookActions.ToggleWorkbookLikedFailure(err)))
        ))
    );

    @Effect()
    commentOnWorkbook$: Observable<Action> = this.action$.pipe(
        ofType(workbookActions.WorkbookActionTypes.CommentOnWorkbook),
        map((action: workbookActions.CommentOnWorkbook) => action.payload),
        mergeMap((comment: IComment) => this.workbookService.commentOnWorkbook(comment.workbookId, comment.comment).pipe(
            map(newComment => new workbookActions.ToggleWorkbookLikedSuccess(newComment)),
            catchError(err => of(new workbookActions.ToggleWorkbookLikedFailure(err)))
        ))
    );
}

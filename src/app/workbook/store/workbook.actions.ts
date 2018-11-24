import { Action } from '@ngrx/store';
import { IComment } from '../interface/comment';
import { IKeyWorkbook } from '../interface/key-workbook';
import { IWorkbook } from '../interface/workbook';
import { IWorkbookLink } from '../interface/workbook-link';

export enum WorkbookActionTypes {
    ToggleFavouriteWorkbooks = '[Workbook] Toggle Favourite Workbooks',
    ToggleWorkbookHistory = '[Workbook] Toggle Workbook History',

    CommentOnWorkbook = '[Workbook] Comment On Workbook',
    CommentOnWorkbookFailure = '[Workbook] Comment On Workbook Failure',
    CommentOnWorkbookSuccess = '[Workbook] Comment On Workbook Success',

    LoadFavouriteWorkbooks = '[Workbook] Load Favourite Workbooks',
    LoadFavouriteWorkbooksFailure = '[Workbook] Load Favourite Workbooks Failure',
    LoadFavouriteWorkbooksSuccess = '[Workbook] Load Favourite Workbooks Success',

    LoadKeyWorkbooks = '[Workbook] Load Key Workbooks',
    LoadKeyWorkbooksFailure = '[Workbook] Load Key Workbooks Failure',
    LoadKeyWorkbooksSuccess = '[Workbook] Load Key Workbooks Success',

    LoadMoreComments = '[Workbook] Load More Comments',
    LoadMoreCommentsFailure = '[Workbook] Load More Comments Failure',
    LoadMoreCommentsSuccess = '[Workbook] Load More Comments Success',

    LoadNewsletters = '[Workbook] Load Newsletters',
    LoadNewslettersFailure = '[Workbook] Load Newsletters Failure',
    LoadNewslettersSuccess = '[Workbook] Load Newsletters Success',

    LoadWorkbooks = '[Workbook] Load Workbooks',
    LoadWorkbooksFailure = '[Workbook] Load workbooks Failure',
    LoadWorkbooksSuccess = '[Workbook] Load Workbooks Success',

    LoadWorkbookHistory = '[Workbook] Load Workbook History',
    LoadWorkbookHistoryFailure = '[Workbook] Load Workbook History Failure',
    LoadWorkbookHistorySuccess = '[Workbook] Load Workbook History Success',

    ToggleWorkbookFavourite = '[Workbook] Toggle Workbook As Favourite',
    ToggleWorkbookFavouriteFailure = '[Workbook] Toggle Workbook As Favourite Failure',
    ToggleWorkbookFavouriteSuccess = '[Workbook] Toggle Workbook As Favourite Success',

    ToggleWorkbookLike = '[Workbook] Toggle Like Workbook',
    ToggleWorkbookLikedFailure = '[Workbook] Toggle Like Workbook Failure',
    ToggleWorkbookLikedSuccess = '[Workbook] Toggle Like Workbook Success'
}

export class ToggleFavouriteWorkbooks implements Action {
    readonly type = WorkbookActionTypes.ToggleFavouriteWorkbooks;

    constructor(public payload: boolean) { }
}

export class ToggleWorkbookHistory implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookHistory;

    constructor(public payload: boolean) { }
}
export class CommentOnWorkbook implements Action {
    readonly type = WorkbookActionTypes.CommentOnWorkbook;

    constructor(public payload: null) { }
}

export class CommentOnWorkbookFailure implements Action {
    readonly type = WorkbookActionTypes.CommentOnWorkbookFailure;

    constructor(public payload: string) { }
}

export class CommentOnWorkbookSuccess implements Action {
    readonly type = WorkbookActionTypes.CommentOnWorkbookSuccess;

    constructor(public payload: IComment) { }
}

export class LoadFavouriteWorkbooks implements Action {
    readonly type = WorkbookActionTypes.LoadFavouriteWorkbooks;
}

export class LoadFavouriteWorkbooksFailure implements Action {
    readonly type = WorkbookActionTypes.LoadFavouriteWorkbooksFailure;

    constructor(public payload: string) { }
}

export class LoadFavouriteWorkbooksSuccess implements Action {
    readonly type = WorkbookActionTypes.LoadFavouriteWorkbooksSuccess;

    constructor(public payload: IWorkbookLink[]) { }
}

export class LoadKeyWorkbooks implements Action {
    readonly type = WorkbookActionTypes.LoadKeyWorkbooks;
}

export class LoadKeyWorkbooksFailure implements Action {
    readonly type = WorkbookActionTypes.LoadKeyWorkbooksFailure;

    constructor(public payload: string) { }
}

export class LoadKeyWorkbooksSuccess implements Action {
    readonly type = WorkbookActionTypes.LoadKeyWorkbooksSuccess;

    constructor(public payload: IKeyWorkbook[]) { }
}

export class LoadMoreComments implements Action {
    readonly type = WorkbookActionTypes.LoadMoreComments;

    constructor(public payload: null) { }
}

export class LoadMoreCommentsFailure implements Action {
    readonly type = WorkbookActionTypes.LoadMoreCommentsFailure;

    constructor(public payload: string) { }
}

export class LoadMoreCommentsSuccess implements Action {
    readonly type = WorkbookActionTypes.LoadMoreCommentsSuccess;

    constructor(public payload: IComment[]) { }
}

export class LoadNewsletters implements Action {
    readonly type = WorkbookActionTypes.LoadNewsletters;
}

export class LoadNewslettersFailure implements Action {
    readonly type = WorkbookActionTypes.LoadNewslettersFailure;

    constructor(public payload: string) { }
}

export class LoadNewslettersSuccess implements Action {
    readonly type = WorkbookActionTypes.LoadNewslettersSuccess;

    constructor(public payload: IWorkbookLink[]) { }
}

export class LoadWorkbooks implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbooks;
}

export class LoadWorkbooksFailure implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbooksFailure;

    constructor(public payload: string) { }
}

export class LoadWorkbooksSuccess implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbooksSuccess;

    constructor(public payload: IWorkbook[]) { }
}

export class LoadWorkbookHistory implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbookHistory;
}

export class LoadWorkbookHistoryFailure implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbookHistoryFailure;

    constructor(public payload: string) { }
}

export class LoadWorkbookHistorySuccess implements Action {
    readonly type = WorkbookActionTypes.LoadWorkbookHistorySuccess;

    constructor(public payload: IWorkbookLink[]) { }
}

export class ToggleWorkbookFavourite implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookFavourite;

    constructor(public payload: IWorkbook) { }
}

export class ToggleWorkbookFavouriteFailure implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookFavouriteFailure;

    constructor(public payload: string) { }
}

export class ToggleWorkbookFavouriteSuccess implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookFavouriteSuccess;

    constructor(public payload: IWorkbook) { }
}

export class ToggleWorkbookLike implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookLike;

    constructor(public payload: IWorkbook) { }
}

export class ToggleWorkbookLikedFailure implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookLikedFailure;

    constructor(public payload: string) { }
}

export class ToggleWorkbookLikedSuccess implements Action {
    readonly type = WorkbookActionTypes.ToggleWorkbookLikedSuccess;

    constructor(public payload: IWorkbook) { }
}

export type WorkbookActions = ToggleFavouriteWorkbooks
    | ToggleWorkbookHistory
    | CommentOnWorkbook
    | CommentOnWorkbookFailure
    | CommentOnWorkbookSuccess
    | LoadFavouriteWorkbooks
    | LoadFavouriteWorkbooksFailure
    | LoadFavouriteWorkbooksSuccess
    | LoadKeyWorkbooks
    | LoadKeyWorkbooksFailure
    | LoadKeyWorkbooksSuccess
    | LoadMoreComments
    | LoadMoreCommentsFailure
    | LoadMoreCommentsSuccess
    | LoadNewsletters
    | LoadNewslettersFailure
    | LoadNewslettersSuccess
    | LoadWorkbooks
    | LoadWorkbooksFailure
    | LoadWorkbooksSuccess
    | LoadWorkbookHistory
    | LoadWorkbookHistoryFailure
    | LoadWorkbookHistorySuccess
    | ToggleWorkbookFavourite
    | ToggleWorkbookFavouriteFailure
    | ToggleWorkbookFavouriteSuccess
    | ToggleWorkbookLike
    | ToggleWorkbookLikedFailure
    | ToggleWorkbookLikedSuccess;

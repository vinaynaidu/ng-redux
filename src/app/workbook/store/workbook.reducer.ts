import { IWorkbookState, initialState } from './workbook-state';
import { WorkbookActions, WorkbookActionTypes } from './workbook.actions';
import { IWorkbookLink } from '../interface/workbook-link';
import { IWorkbook } from '../interface/workbook';

export function reducer(state: IWorkbookState = initialState, action: WorkbookActions): IWorkbookState {

    switch (action.type) {

        case WorkbookActionTypes.ToggleFavouriteWorkbooks:
            return {
                ...state,
                isFavouriteWorkbookExpanded: action.payload
            };

        case WorkbookActionTypes.ToggleWorkbookHistory:
            return {
                ...state,
                isWorkbookHistoryExpanded: action.payload
            };

        case WorkbookActionTypes.CommentOnWorkbookFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.CommentOnWorkbookSuccess:

            // Add new comment to the workbook
            const commentedWorkbooks = state.workbooks.map(
                workbook => action.payload.workbookId === workbook.id ? {
                    ...workbook,
                    comments: [action.payload, ...workbook.comments]
                } as IWorkbook : workbook);

            return {
                ...state,
                workbooks: commentedWorkbooks
            };

        case WorkbookActionTypes.LoadKeyWorkbooksFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadKeyWorkbooksSuccess:
            return {
                ...state,
                error: '',
                keyWorkbooks: action.payload
            };

        case WorkbookActionTypes.LoadNewslettersFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadNewslettersSuccess:
            return {
                ...state,
                error: '',
                newsletters: action.payload
            };

        case WorkbookActionTypes.LoadMoreCommentsFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadMoreCommentsSuccess:

            // Append loaded comments to workbook
            const workbooksWithComments = state.workbooks.map(
                workbook => action.payload[0].workbookId === workbook.id ? {
                    ...workbook,
                    comments: [...workbook.comments, action.payload]
                } as IWorkbook : workbook);

            return {
                ...state,
                error: '',
                workbooks: workbooksWithComments
            };

        case WorkbookActionTypes.LoadWorkbooksFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadWorkbooksSuccess:
            return {
                ...state,
                error: '',
                workbooks: action.payload
            };

        case WorkbookActionTypes.LoadFavouriteWorkbooksFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadFavouriteWorkbooksSuccess:
            return {
                ...state,
                error: '',
                favouriteWorkbooks: action.payload
            };

        case WorkbookActionTypes.LoadWorkbookHistoryFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.LoadWorkbookHistorySuccess:
            return {
                ...state,
                error: '',
                workbookHistory: action.payload
            };

        case WorkbookActionTypes.ToggleWorkbookFavouriteFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.ToggleWorkbookFavouriteSuccess:

            // Update workbook in list of workbooks
            const updatedWorkbooks = state.workbooks.map(
                workbook => action.payload.id === workbook.id ? action.payload : workbook);

            // Update favourite workbook list
            let updatedFavouriteWorkbooks = [];

            if (action.payload.isStarred) {
                // Favourited a workbook. Add to existing list.
                updatedFavouriteWorkbooks = state.favouriteWorkbooks.concat({
                    id: action.payload.id,
                    name: action.payload.name,
                    url: action.payload.url
                } as IWorkbookLink);

            } else {
                // Unfavourited a workbook. Remove it from existing list.
                updatedFavouriteWorkbooks = state.favouriteWorkbooks.filter(workbook => workbook.id !== action.payload.id);
            }

            return {
                ...state,
                error: '',
                workbooks: updatedWorkbooks,
                favouriteWorkbooks: updatedFavouriteWorkbooks
            };

        case WorkbookActionTypes.ToggleWorkbookLikedFailure:
            return {
                ...state,
                error: action.payload
            };

        case WorkbookActionTypes.ToggleWorkbookLikedSuccess:

            // Update workbook in list of workbooks
            const updatedLikedWorkbooks = state.workbooks.map(
                workbook => action.payload.id === workbook.id ? action.payload : workbook);

            return {
                ...state,
                error: '',
                workbooks: updatedLikedWorkbooks
            };

        default:
            return state;
    }

}
